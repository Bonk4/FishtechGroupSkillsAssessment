import React from "react";
import { Contact } from "../../model/whoIsApiResponse/contact";

type Props = {
    contact: Contact | undefined;
};

export class ContactForm extends React.Component<Props> {

    render() {
        return (
            <div className="form-group">
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="contactOrganization" value={this.props.contact?.organization} readOnly={true} />
                    <label htmlFor="contactOrganization">Name</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="contactState" value={this.props.contact?.state} readOnly={true} />
                    <label htmlFor="contactState">State</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="contactCountry" value={this.props.contact?.country} readOnly={true} />
                    <label htmlFor="contactCountry">Country</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="contactCountryCode" value={this.props.contact?.countryCode} readOnly={true} />
                    <label htmlFor="contactCountryCode">Country Code</label>
                </div>
                <div className="form-floating mb-3">
                    <textarea className="form-control" id="contactRawText" value={this.props.contact?.rawText} readOnly={true} />
                    <label htmlFor="contactRawText">RawText</label>
                </div>
            </div>
        );
    }
}