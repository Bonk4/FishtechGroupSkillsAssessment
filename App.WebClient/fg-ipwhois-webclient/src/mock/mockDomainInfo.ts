import { DomainInfo } from "../model/ip2WhoIsApiResponse/domain";

export class MockDomainInfo {
    static getMockDomainInfo() {
        let mockResponse = new DomainInfo();

        mockResponse.Name = 'test.com';
        mockResponse.Id = '1';
        mockResponse.Status = 'TEST';
        mockResponse.Age = 2;

        mockResponse.CreateDate = new Date("2020-01-01").toDateString();
        mockResponse.UpdateDate = new Date("2020-01-01").toDateString();
        mockResponse.ExpireDate = new Date("2020-01-01").toDateString();

        mockResponse.WhoIsServer = 'TestServer.com';

        mockResponse.NameServers = ['test.com', 'test.org', 'test.gov'];

        return mockResponse;
    }
}