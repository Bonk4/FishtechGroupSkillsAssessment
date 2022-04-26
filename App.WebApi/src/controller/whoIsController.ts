import { WhoIsResponse } from "../model/whoIsResponse";
import fetch from "node-fetch";

export class WhoIsController {
    endpoint = "https://www.whoisxmlapi.com/whoisserver/WhoisService?apiKey=at_olp4gHQPIeIBuYQkrg2WzPBOcfK4G&outputFormat=json&domainName=";

    //actual WhoIs request using 
    async get(domain: string): Promise<WhoIsResponse> {
        console.log(this.endpoint + domain);
        let response: any;

        await (await fetch(this.endpoint + domain, {
            method: 'GET',
            headers: { 'Context-Type': 'application/json' }
        })).json().then(x => response = x);
        
        console.log('test');
        return response.WhoisRecord as WhoIsResponse;
    }
}
