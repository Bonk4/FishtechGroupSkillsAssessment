import { RegistrarInfo } from "../model/ip2WhoIsApiResponse/registrarInfo";

export class MockRegistrarInfo {
    static getMockRegistrar(): RegistrarInfo {
        let mockResponse = new RegistrarInfo();
        
        mockResponse.Iana_id = "1";
        mockResponse.Name = "Mock Registrar";
        mockResponse.Url = "mock.com";
        
        return mockResponse;
    }
}