import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { DefaultApi, CarDTO, CarFilterRequest } from "typescript-axios";

interface IState {
    [key: string]: any;
    cars: CarDTO[];
    values: CarFilterRequest[];
    loading: boolean;
}

export default class Home extends React.Component<RouteComponentProps, IState> {
    carApi = new DefaultApi({basePath: "http://localhost:8080"});

    constructor(props: RouteComponentProps) {
        super(props);
        this.state = {
            cars: [],
            values: [],
            loading: false
        }
    }

    public componentDidMount(): void {

        this.carApi.carsGet().then(data => {
            this.setState({cars: data.data})
        })
    }

    private processFormSubmission = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        this.setState({ loading: true });

        const formData = {
            make: this.state.make,
            year: this.state.year
        }

        this.setState({ values: [...this.state.values, formData], loading: false });
        if (!formData.make && !formData.year) {
            this.carApi.carsGet().then(data => {
                this.setState({cars: data.data})
            })
        } else {
            this.carApi.carsFilterPost(formData)
            .then(response => this.setState({cars: (response as any).data}))
        }
    }

    private handleInputChanges = (e: React.FormEvent<HTMLInputElement>) => {
        e.preventDefault();
        this.setState({
            [e.currentTarget.name]: e.currentTarget.value,
        })
    }

    public render() {
        const cars = this.state.cars;
        const loading = this.state.loading;
        return (
            <div>
                {cars.length === 0 && (
                    <div className="text-center">
                        <h2>No cars in the store right now</h2>
                    </div>
                )}

                <div className="container">
                    <div className="text-center">
                        <h2>Current inventory</h2>
                    </div>
                    {!loading && (
                        <div className="row">
                            <form id={"filter-form"} onSubmit={this.processFormSubmission} noValidate={true}>
                                <div className="form-group col-md-12">
                                    <label htmlFor="make"> Make </label>
                                    <input type="text" id="make" onChange={(e) => this.handleInputChanges(e)} name="make" className="form-control" />
                                </div>

                                <div className="form-group col-md-12">
                                    <label htmlFor="year"> Year of release </label>
                                    <input type="number" id="year" onChange={(e) => this.handleInputChanges(e)} name="year" className="form-control"/>
                                </div>

                                <div className="form-group col-md-4 pull-right">
                                    <button className="btn btn-success" type="submit">
                                        Search
                                    </button>
                                    {loading &&
                                        <span className="fa fa-circle-o-notch fa-spin" />
                                    }
                                </div>
                            </form>
                        </div>
                    )}
                    <div className="row">
                        <table className="table table-bordered">
                            <thead className="thead-light">
                                <tr>
                                    <th scope="col">Make</th>
                                    <th scope="col">Model</th>
                                    <th scope="col">Version</th>
                                    <th scope="col">Release year</th>
                                    <th scope="col">Price</th>
                                    <th scope="col">Fuel (KM/ L)</th>
                                    <th scope="col">Maintenance (€/ per month)</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cars && cars.map((car, index) =>
                                    <tr key={index}>
                                        <td>{car.make}</td>
                                        <td>{car.model}</td>
                                        <td>{car.version}</td>
                                        <td>{car.releaseYear}</td>
                                        <td>{car.price}</td>
                                        <td>{car.fuelConsumption}</td>
                                        <td>{car.annualMaintenanceCost}</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}