import React, { ChangeEventHandler, FormEventHandler, MouseEventHandler } from "react";
import { WhoIsApiResponse } from "../model/whoIsApiResponse/whoIsApiResponse";
import { WhoIsApiService } from "../service/whoIsService";
import { IpWhoResponseForm } from "./ipWhoResponseForm";

export class IpWhoRequestForm extends React.Component {
    apiService: WhoIsApiService = new WhoIsApiService();
    response: WhoIsApiResponse | undefined = undefined;
    searchTerm: string = '';

    submitForm = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        await this.apiService.getWhoIsResponse(this.searchTerm)
            .then(response => this.handleResponse(response));
    }

    clearForm = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        this.handleResponse(undefined);
    }

    handleResponse(whoIsResponse: WhoIsApiResponse | undefined) {
        console.log(whoIsResponse);

        this.response = whoIsResponse;

        this.setState({ response: this.response });
    }
    
    handleChange = (input: string) => {
        this.searchTerm = input;
    }

    render() {
        return (
            <div className="container mt-3">
                <form onSubmit={this.submitForm}>
                    <div className="row w-50">
                        <h3>What is this?</h3>
                        <p className="lead">
                            This web app handles checking domain info on any site you search for.
                            Enter any web domain to get more information.
                        </p>
                    </div>

                    <div className="row">
                        <div className="input-group mb-3 w-50">
                            <input type="text" className="form-control"
                                placeholder="IP Address or Domain"
                                aria-label="Recipient's username" aria-describedby="button-search" 

                                
                                onChange={event => this.handleChange(event.target.value)} />

                            <button className="btn btn-outline-primary" type="submit" id="button-serach">
                                Search
                            </button>
                            
                            <button className="btn btn-outline-secondary" type="button" onClick={this.clearForm}>
                                Clear
                            </button>
                        </div>
                    </div>
                </form>

                <IpWhoResponseForm apiResponse={this.response} />
            </div>
        );
    }
}