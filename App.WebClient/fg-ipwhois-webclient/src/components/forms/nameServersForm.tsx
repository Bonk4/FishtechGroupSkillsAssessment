import React from "react";
import { NameServers } from "../../model/whoIsApiResponse/nameServers";

type Props = {
    NameServers: NameServers | undefined;
};

export class NameServersForm extends React.Component<Props> {

    buildListString(input: string[] | undefined): string {
        if(input === undefined)
            return 'None';

        return input.join('\n');
    }

    render() {
        return (
            <div className="form-group">
                <div className="form-floating mb-3">
                    <textarea className="form-control" id="hostNames" value={this.buildListString(this.props.NameServers?.hostNames)} readOnly={true} />
                    <label htmlFor="hostNames">Hostnames</label>
                </div>
                <div className="form-floating mb-3">
                    <textarea className="form-control" id="ips" value={this.buildListString(this.props.NameServers?.ips)} readOnly={true} />
                    <label htmlFor="ips">IPs</label>
                </div>
            </div>
        );
    }
}