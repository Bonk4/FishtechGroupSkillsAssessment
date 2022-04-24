import { MockIpWhoResponse } from "../mock/mockIpWhoResponse";
import { Address } from "../model/address";
import { RegistrarInfo } from "../model/registrarInfo";
import { WhoIsResponse } from "../model/whoisResponse";

export class WhoIsApiService {
    private webApi: string = "";

    async getWhoIsResponse(): Promise<WhoIsResponse> {
        //todo: delete mock response

        // for testing without the api
        return MockIpWhoResponse.getMockResponse();
        
        const headers = { 'Content-Type': 'application/json' }

        let response = await fetch(this.webApi);

        const data = await response.json();

        return this.convertResponse(data);
    }

    convertResponse(json: string): WhoIsResponse {
        //todo: write mapping class
        return new WhoIsResponse();
    }
}