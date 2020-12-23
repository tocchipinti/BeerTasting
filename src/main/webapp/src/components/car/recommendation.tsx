import * as React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { CarRecommendationRequest } from 'typescript-axios';
import { DefaultApi, CarDTO } from "typescript-axios";

interface IState {
    [key: string]: any;
    cars: CarDTO[];
    values: CarRecommendationRequest[];
    submitSuccess: boolean;
    loading: boolean;
}

export class Recommendation extends React.Component<RouteComponentProps, IState> {
    carApi = new DefaultApi({basePath: "http://localhost:8080"});

    constructor(props: RouteComponentProps) {
        super(props);
        this.state = {
            distance: 0,
            period: 0,
            fuelPrice: 0.0,
            cars: [],
            values: [],
            loading: false,
            submitSuccess: false
        }
    }

    private processFormSubmission = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        this.setState({ loading: true });

        const formData = {
            distance: this.state.distance,
            period: this.state.period,
            fuelPrice: this.state.fuelPrice
        }

        this.setState({ submitSuccess: true, values: [...this.state.values, formData], loading: false });

        this.carApi.carsRecommendPost(formData)
            .then(response => this.setState({cars: (response as any).data}))
    }

    private handleInputChanges = (e: React.FormEvent<HTMLInputElement>) => {
        e.preventDefault();
        this.setState({
            [e.currentTarget.name]: e.currentTarget.value,
        })
    }

    public render() {
        const cars = this.state.cars;
        const { submitSuccess, loading } = this.state;
        return (
            <div>
                <h2> Make Recommendation </h2>
                {!submitSuccess && (
                    <div className="alert alert-info" role="alert">
                        Fill the form below to calculate a recommendation
                    </div>
                )}

                {!submitSuccess && (
                    <form id={"make-recommendation-form"} onSubmit={this.processFormSubmission} noValidate={true}>
                        <div className="form-group col-md-12">
                            <label htmlFor="distance"> Distance </label>
                            <input type="number" id="distance" onChange={(e) => this.handleInputChanges(e)} name="distance" className="form-control" placeholder="Enter expected distance in km/month" />
                        </div>

                        <div className="form-group col-md-12">
                            <label htmlFor="fuelPrice"> Fuelprice </label>
                            <input type="number" id="fuelPrice" onChange={(e) => this.handleInputChanges(e)} name="fuelPrice" className="form-control" placeholder="Enter fuelprice in €/L" />
                        </div>

                        <div className="form-group col-md-12">
                            <label htmlFor="period"> Period </label>
                            <input type="number" id="period" onChange={(e) => this.handleInputChanges(e)} name="period" className="form-control" placeholder="Enter the number of years" />
                        </div>

                        <div className="form-group col-md-4 pull-right">
                            <button className="btn btn-success" type="submit">
                                Make Recommendation
                            </button>
                            {loading &&
                                <span className="fa fa-circle-o-notch fa-spin" />
                            }
                        </div>
                    </form>
                )}
                    
                {submitSuccess && cars.length === 0 &&(
                    <div className="text-center">
                        <h2>No cars in the store right now</h2>
                    </div>
                )}

                {submitSuccess && cars.length !== 0 && (
                    <div className="container">
                        <div className="text-center">
                            <h2>Recommendations</h2>
                        </div>
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
                )}
            </div>
        )
    }
}
export default withRouter(Recommendation)