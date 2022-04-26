import React from "react";
import { WhoIsRecord } from "../../model/whoIsApiResponse/whoIsRecord";

type Props = {
    WhoIsRecord: WhoIsRecord | undefined;
};

export class RegistrarForm extends React.Component<Props> {

    render() {
        return (
            <div className="form-group">
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="registrarIanaId" value={this.props.WhoIsRecord?.registryData.registrarIANAID} readOnly={true} />
                    <label htmlFor="registrarIanaId">Iana ID</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="registrarName" value={this.props.WhoIsRecord?.registryData.registrarName} readOnly={true} />
                    <label htmlFor="registrarName">Name</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="registrarUrl" value={this.props.WhoIsRecord?.registryData.domainName} readOnly={true} />
                    <label htmlFor="registrarUrl">Domain Name</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="registrarStatus" value={this.props.WhoIsRecord?.registryData.status} readOnly={true} />
                    <label htmlFor="registrarStatus">Status</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="registrarHeader" value={this.props.WhoIsRecord?.contactemail} readOnly={true} />
                    <label htmlFor="contactEmail">Contact Email</label>
                </div>
            </div>
        );
    }
}