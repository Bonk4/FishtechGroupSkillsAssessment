import React from "react";
import { WhoIsRecord } from "../../model/whoIsApiResponse/whoIsRecord";

type Props = {
    WhoisRecord: WhoIsRecord | undefined;
};

export class DomainInfoForm extends React.Component<Props> {
    buildListString(input: (string)[] | undefined): string {
        if (input === undefined)
            return '';

        let response = input.join(', ');

        return response;
    }
    
    buildAgeString(input: number | undefined) {
        if(input !== undefined)
            return input;
        
        return "";
    }

    buildDateString(input: string | undefined): string {
        if(input !== undefined)
            return new Date(input).toLocaleDateString();

        return '';
    }

    render() {
        return (
            <div className="form-group">
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="domainName" value={this.props.WhoisRecord?.domainName} readOnly={true} />
                    <label htmlFor="domainName">Name</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="domainNameExt" value={this.props.WhoisRecord?.domainNameExt} readOnly={true} />
                    <label htmlFor="domainNameExt">Name Ext</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="domainAge" value={this.buildAgeString(this.props.WhoisRecord?.estimatedDomainAge)} readOnly={true} />
                    <label htmlFor="domainAge">Age</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="domainStatus" value={this.props.WhoisRecord?.domainName} readOnly={true} />
                    <label htmlFor="domainStatus">Status</label>
                </div>
                <div className="row">
                    <div className="col">
                        <div className="form-floating mb-3">
                            <input type="text" className="form-control" id="domainName" value={this.buildDateString(this.props.WhoisRecord?.createdDate)} readOnly={true} />
                            <label htmlFor="domainCreated">Created Date</label>
                        </div>
                    </div>
                
                    <div className="col">
                        <div className="form-floating mb-3">
                            <input type="text" className="form-control" id="domainName" value={this.buildDateString(this.props.WhoisRecord?.updatedDate)} readOnly={true} />
                            <label htmlFor="domainUpdated">Updated Date</label>
                        </div>
                    </div>
                
                    <div className="col">
                        <div className="form-floating mb-3">
                            <input type="text" className="form-control" id="domainName" value={this.buildDateString(this.props.WhoisRecord?.expiresDate)} readOnly={true} />
                            <label htmlFor="domainExpired">Expired Date</label>
                        </div>
                    </div>
                </div>
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="whoisServer" value={this.props.WhoisRecord?.registryData.whoisServer} readOnly={true} />
                    <label htmlFor="whoisServer">WhoIs Server</label>
                </div>
            </div>
        );
    }
}