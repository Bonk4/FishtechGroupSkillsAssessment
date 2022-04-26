import { WhoIsApiResponse } from "../model/whoIsApiResponse/whoIsApiResponse";

export class WhoIsApiService {
    private webApi: string = "http://20.124.53.93:7000/whois/";

    async getWhoIsResponse(searchTerm: string): Promise<WhoIsApiResponse> {
        const headers = { 'Content-Type': 'application/json' }

        let response = await fetch(this.webApi + searchTerm, { headers: headers });

        const data = await response.json() as WhoIsApiResponse;

        return data;
    }
}