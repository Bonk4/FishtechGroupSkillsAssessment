import React from "react";
import { RegistrarInfo } from "../../model/registrarInfo";

type Props = {
    registrar: RegistrarInfo | undefined;
};

export class RegistrarForm extends React.Component<Props> {

    render() {
        return (
            <div className="form-group">
                <div className="form-floating mb-3">
                    <input type="email" className="form-control" id="registrarIanaId" value={this.props.registrar?.Iana_id} readOnly={true} />
                    <label htmlFor="registrarIanaId">Iana ID</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="email" className="form-control" id="registrarName" value={this.props.registrar?.Name} readOnly={true} />
                    <label htmlFor="registrarName">Name</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="email" className="form-control" id="registrarUrl" value={this.props.registrar?.Url} readOnly={true} />
                    <label htmlFor="registrarUrl">Url</label>
                </div>
            </div>
        );
    }
}