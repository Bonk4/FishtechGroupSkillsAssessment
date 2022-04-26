import { ErrorResponse } from "../model/errorResponse";
import { WhoIsApiResponse } from "../model/whoIsApiResponse/whoIsApiResponse";

export class WhoIsApiService {
    private webApi: string = "http://20.124.53.93:7000/whois/";

    async getWhoIsResponse(searchTerm: string): Promise<WhoIsApiResponse | undefined> {
        const headers = { 'Content-Type': 'application/json' }

        let response = await fetch(this.webApi + searchTerm, { headers: headers });

        const data = await response.json();

        if(data.hasOwnProperty('ErrorMessage')){
            let response = new WhoIsApiResponse();

            response.ErrorResponse = new ErrorResponse();
            response.ErrorResponse.isError = true;
            response.ErrorResponse.message = JSON.stringify(data);

            return response;
        }
        
        return data as WhoIsApiResponse;
    }
}