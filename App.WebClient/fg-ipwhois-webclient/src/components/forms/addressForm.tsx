import React from "react";
import { Address } from "../../model/address";

type Props = {
    address: Address | undefined;
};

export class AddressForm extends React.Component<Props> {

    render() {
        return (
            <div className="form-group">
                <div className="form-floating mb-3">
                    <input type="email" className="form-control" id="addressName" value={this.props.address?.name} readOnly={true} />
                    <label htmlFor="addressName">Name</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="email" className="form-control" id="addressOrg" value={this.props.address?.organization} readOnly={true} />
                    <label htmlFor="addressOrg">Organization</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="email" className="form-control" id="addressStreet" value={this.props.address?.street_address} readOnly={true} />
                    <label htmlFor="addressStreet">Street</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="email" className="form-control" id="addressCity" value={this.props.address?.city} readOnly={true} />
                    <label htmlFor="addressCity">City</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="email" className="form-control" id="addressRegion" value={this.props.address?.region} readOnly={true} />
                    <label htmlFor="addressRegion">Region</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="email" className="form-control" id="addressZip" value={this.props.address?.zip_code} readOnly={true} />
                    <label htmlFor="addressZip">ZIP</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="email" className="form-control" id="addressCountry" value={this.props.address?.country} readOnly={true} />
                    <label htmlFor="addressCountry">Country</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="email" className="form-control" id="addressPhone" value={this.props.address?.phone} readOnly={true} />
                    <label htmlFor="addressPhone">Phone</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="email" className="form-control" id="addressFax" value={this.props.address?.fax} readOnly={true} />
                    <label htmlFor="addressFax">Fax</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="email" className="form-control" id="addressEmail" value={this.props.address?.email} readOnly={true} />
                    <label htmlFor="addressEmail">Email</label>
                </div>
            </div>
        );
    }
}