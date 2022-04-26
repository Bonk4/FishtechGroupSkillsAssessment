import { MockIpWhoResponse } from "../mock/mockIpWhoResponse";
import { Address } from "../model/ip2WhoIsApiResponse/address";
import { WhoIsApiResponse } from "../model/whoIsApiResponse/whoIsApiResponse";

export class WhoIsApiService {
    private webApi: string = "http://20.124.53.93:7000/whois/mock";

    async getWhoIsResponse(): Promise<WhoIsApiResponse> {
        //todo: delete mock response

        // for testing without the api
        // let responseData = MockIpWhoResponse.getMockResponse();
        // console.log(JSON.stringify(responseData));
        // return responseData;
        
        const headers = { 'Content-Type': 'application/json' }

        let response = await fetch(this.webApi, { headers: headers });

        const data:WhoIsApiResponse = await response.json();

        return data;
    }
}