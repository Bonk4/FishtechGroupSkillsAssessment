import React from "react";
import { WhoIsResponse } from "../model/ip2WhoIsApiResponse/whoisResponse";
import { DomainInfoForm } from "./forms/domainInfoForm";
import { RegistrarForm } from "./forms/registrarForm";
import { AddressForm } from "./forms/addressForm";
import { WhoIsApiResponse } from "../model/whoIsApiResponse/whoIsApiResponse";

type Props = {
    apiResponse: WhoIsApiResponse | undefined;
};

export class IpWhoResponse extends React.Component<Props> {

    render() {
        if (this.props.apiResponse === undefined)
            return (<div></div>);
        else
            return (
                <div className="container mt-3">
                    <div className="row">
                        <div className="col-8">
                            <h5>Domain Info</h5>
                            <DomainInfoForm domainInfo={undefined} />

                            <h5 className="mt-3">Registrar Info</h5>
                            <RegistrarForm registrar={undefined} />
                        </div>

                        <div className="col-4">
                            <h5>Address</h5>
                            <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                                <li className="nav-item w-25" role="presentation">
                                    <button className="nav-link active w-100" id="pills-registrant-tab" data-bs-toggle="pill" data-bs-target="#pills-registrant" type="button" role="tab" aria-controls="pills-registrant" aria-selected="true">Registrant</button>
                                </li>
                                <li className="nav-item w-25" role="presentation">
                                    <button className="nav-link w-100" id="pills-admin-tab" data-bs-toggle="pill" data-bs-target="#pills-admin" type="button" role="tab" aria-controls="pills-admin" aria-selected="false">Admin</button>
                                </li>
                                <li className="nav-item w-25" role="presentation">
                                    <button className="nav-link w-100" id="pills-tech-tab" data-bs-toggle="pill" data-bs-target="#pills-tech" type="button" role="tab" aria-controls="pills-tech" aria-selected="false">Tech</button>
                                </li>
                                <li className="nav-item w-25" role="presentation">
                                    <button className="nav-link w-100" id="pills-billing-tab" data-bs-toggle="pill" data-bs-target="#pills-billing" type="button" role="tab" aria-controls="pills-billing" aria-selected="false">Billing</button>
                                </li>
                            </ul>
                            <div className="tab-content" id="pills-tabContent">
                                <div className="tab-pane fade show active" id="pills-registrant" role="tabpanel" aria-labelledby="pills-registrant-tab">
                                    <AddressForm address={undefined} />
                                </div>
                                <div className="tab-pane fade" id="pills-admin" role="tabpanel" aria-labelledby="pills-admin-tab">
                                    <AddressForm address={undefined} />
                                </div>
                                <div className="tab-pane fade" id="pills-tech" role="tabpanel" aria-labelledby="pills-tech-tab">
                                    <AddressForm address={undefined} />
                                </div>
                                <div className="tab-pane fade" id="pills-billing" role="tabpanel" aria-labelledby="pills-billing-tab">
                                    <AddressForm address={undefined} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
    }
}