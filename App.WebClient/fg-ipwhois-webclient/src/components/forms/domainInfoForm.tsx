import React from "react";
import { DomainInfo } from "../../model/domain";

type Props = {
    domainInfo: DomainInfo | undefined;
};

export class DomainInfoForm extends React.Component<Props> {
    buildNameServersList(input: (string)[] | undefined):string {
        if(input === undefined)
            return '';
        
        let response = input.join(', ');

        return response;
    }

    render() {
        return (
            <div className="form-group">
                <div className="form-floating mb-3">
                    <input type="email" className="form-control" id="domainName" value={this.props.domainInfo?.Name} readOnly={true} />
                    <label htmlFor="domainName">Name</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="email" className="form-control" id="domainName" value={this.props.domainInfo?.Id} readOnly={true} />
                    <label htmlFor="domainName">Id</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="email" className="form-control" id="domainName" value={this.props.domainInfo?.Age + ' years'} readOnly={true} />
                    <label htmlFor="domainName">Age</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="email" className="form-control" id="domainName" value={this.props.domainInfo?.Status} readOnly={true} />
                    <label htmlFor="domainName">Status</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="email" className="form-control" id="domainName" value={this.props.domainInfo?.CreateDate} readOnly={true} />
                    <label htmlFor="domainName">CreateDate</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="email" className="form-control" id="domainName" value={this.props.domainInfo?.UpdateDate} readOnly={true} />
                    <label htmlFor="domainName">Update Date</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="email" className="form-control" id="domainName" value={this.props.domainInfo?.ExpireDate} readOnly={true} />
                    <label htmlFor="domainName">Expire Date</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="email" className="form-control" id="domainName" value={this.props.domainInfo?.WhoIsServer} readOnly={true} />
                    <label htmlFor="domainName">WhoIs Server</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="email" className="form-control" id="domainName" value={ this.buildNameServersList(this.props.domainInfo?.NameServers) } readOnly={true} />
                    <label htmlFor="domainName">Name Servers</label>
                </div>
            </div>
        );
    }
}