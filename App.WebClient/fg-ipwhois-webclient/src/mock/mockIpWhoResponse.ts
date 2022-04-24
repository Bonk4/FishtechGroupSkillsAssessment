import { Address } from "../model/address";
import { WhoIsResponse } from "../model/whoisResponse";
import { MockAddress } from "./mockAddress";
import { MockDomainInfo } from "./mockDomainInfo";
import { MockRegistrarInfo } from "./mockRegistrarInfo";

export class MockIpWhoResponse {
    static getMockResponse(): WhoIsResponse {
        let mockResponse = new WhoIsResponse();

        mockResponse.DomainInfo = MockDomainInfo.getMockDomainInfo();        
        mockResponse.Registrar = MockRegistrarInfo.getMockRegistrar();

        mockResponse.RegistrantAddress = MockAddress.Spidey();
        mockResponse.AdminAddress = MockAddress.Cap();
        mockResponse.TechAddress = MockAddress.IronMan();
        mockResponse.BillingAddress = MockAddress.Thor();

        return mockResponse;
    }
}