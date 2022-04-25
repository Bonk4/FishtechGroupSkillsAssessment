import { MockIpWhoResponse } from "../mock/mockIpWhoResponse";
import { Address } from "../model/address";
import { RegistrarInfo } from "../model/registrarInfo";
import { WhoIsResponse } from "../model/whoisResponse";

export class WhoIsApiService {
    private webApi: string = "http://localhost:7000/whois/mock";

    async getWhoIsResponse(): Promise<WhoIsResponse> {
        //todo: delete mock response

        // for testing without the api
        // let responseData = MockIpWhoResponse.getMockResponse();
        // console.log(JSON.stringify(responseData));
        // return responseData;
        
        const headers = { 'Content-Type': 'application/json' }

        let response = await fetch(this.webApi, { headers: headers });

        const data:WhoIsResponse = await response.json();

        return data;
    }
}