import * as React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { CarDTO, DefaultApi } from "typescript-axios";

export interface IFormState {
    [key: string]: any;
    values: CarDTO[];
    submitSuccess: boolean;
    loading: boolean;
}

export class Create extends React.Component<RouteComponentProps, IFormState> {
    carApi = new DefaultApi({basePath: "http://localhost:8080/"});
    constructor(props: RouteComponentProps) {
        super(props);
        this.state = {
            make: '',
            model: '',
            version: '',
            releaseYear: 0,
            price: 0.0,
            fuelConsumption: 0,
            annualMaintenanceCost: 0.0,
            values: [],
            loading: false,
            submitSuccess: false,
        }
    }

    private processFormSubmission = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        this.setState({ loading: true });

        const formData = {
            make: this.state.make,
            model: this.state.model,
            version: this.state.version,
            releaseYear: this.state.releaseYear,
            price: this.state.price,
            fuelConsumption: this.state.fuelConsumption,
            annualMaintenanceCost: this.state.annualMaintenanceCost
        }

        this.setState({ submitSuccess: true, values: [...this.state.values, formData], loading: false });

        this.carApi.carsPost(formData).then(data => [
            setTimeout(() => {
                this.props.history.push('/');
            }, 1500)
        ])
    }

    private handleInputChanges = (e: React.FormEvent<HTMLInputElement>) => {
        e.preventDefault();
        this.setState({
            [e.currentTarget.name]: e.currentTarget.value,
        })
    }

    public render() {
        const { submitSuccess, loading } = this.state;
        return (
            <div>
                <div className={"col-md-12 form-wrapper"}>
                    <h2> Create Car </h2>
                    {!submitSuccess && (
                        <div className="alert alert-info" role="alert">
                            Fill the form below to add a new car
                    </div>
                    )}

                    {submitSuccess && (
                        <div className="alert alert-info" role="alert">
                            The car was successfully added!
                            </div>
                    )}

                    <form id={"create-car-form"} onSubmit={this.processFormSubmission} noValidate={true}>
                        <div className="form-group col-md-12">
                            <label htmlFor="make"> Make </label>
                            <input type="text" id="make" onChange={(e) => this.handleInputChanges(e)} name="make" className="form-control" placeholder="Enter car's make" />
                        </div>

                        <div className="form-group col-md-12">
                            <label htmlFor="model"> Model </label>
                            <input type="text" id="model" onChange={(e) => this.handleInputChanges(e)} name="model" className="form-control" placeholder="Enter car's model" />
                        </div>

                        <div className="form-group col-md-12">
                            <label htmlFor="version"> Version </label>
                            <input type="version" id="version" onChange={(e) => this.handleInputChanges(e)} name="version" className="form-control" placeholder="Enter car's version" />
                        </div>

                        <div className="form-group col-md-12">
                            <label htmlFor="releaseYear"> Release year </label>
                            <input type="number" id="releaseYear" onChange={(e) => this.handleInputChanges(e)} name="releaseYear" className="form-control" placeholder="Enter car's release year" />
                        </div>

                        <div className="form-group col-md-12">
                            <label htmlFor="price"> Price </label>
                            <input type="number" id="price" onChange={(e) => this.handleInputChanges(e)} name="price" className="form-control" placeholder="Enter car's price" />
                        </div>

                        <div className="form-group col-md-12">
                            <label htmlFor="fuelConsumption"> Fuel consumption </label>
                            <input type="number" id="fuelConsumption" onChange={(e) => this.handleInputChanges(e)} name="fuelConsumption" className="form-control" placeholder="Enter car's fuel consumption in KM/L" />
                        </div>

                        <div className="form-group col-md-12">
                            <label htmlFor="annualMaintenanceCost"> Annual maintenance cost </label>
                            <input type="number" id="annualMaintenanceCost" onChange={(e) => this.handleInputChanges(e)} name="annualMaintenanceCost" className="form-control" placeholder="Enter car's annual maintenance cost in Euro" />
                        </div>

                        <div className="form-group col-md-4 pull-right">
                            <button className="btn btn-success" type="submit">
                                Add Car
                            </button>
                            {loading &&
                                <span className="fa fa-circle-o-notch fa-spin" />
                            }
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default withRouter(Create)