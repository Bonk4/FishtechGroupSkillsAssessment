import { Address } from "../model/address";

export class MockAddress {
    static getMockAddress(): Address {
        let mockResponse = new Address();

        mockResponse.name = 'Testy McGee';
        mockResponse.organization = 'Test';
        mockResponse.street_address = '123 Test Ln';
        mockResponse.city = 'TestLand';
        mockResponse.region = 'Test, DC';
        mockResponse.zip_code = '12345';
        mockResponse.country = 'USA';
        mockResponse.phone = '1234567890';
        mockResponse.fax = '1234567890';
        mockResponse.email = 'test@test.com';

        return mockResponse;
    }

    static Spidey():Address {
        let spidey = new Address();

        spidey.name = 'Peter Parker';
        spidey.organization = 'Avengers';
        spidey.street_address = '123 Avengers Tower';
        spidey.city = 'New York City';
        spidey.region = 'Queens';
        spidey.zip_code = '12345';
        spidey.country = 'USA';
        spidey.phone = '1234567890';
        spidey.fax = '1234567890';
        spidey.email = 'spider.man@avengers.com';

        return spidey;
    }

    static Cap():Address {
        let cap = new Address();

        cap.name = 'Steve Rogers';
        cap.organization = 'Avengers';
        cap.street_address = '123 Avengers Tower';
        cap.city = 'New York City';
        cap.region = 'Queens';
        cap.zip_code = '12345';
        cap.country = 'USA';
        cap.phone = '1234567890';
        cap.fax = '1234567890';
        cap.email = 'captain.america@avengers.com';

        return cap;
    }

    static IronMan():Address {
        let ironMan = new Address();

        ironMan.name = 'Tony Stark';
        ironMan.organization = 'Avengers';
        ironMan.street_address = '123 Avengers Tower';
        ironMan.city = 'New York City';
        ironMan.region = 'Queens';
        ironMan.zip_code = '12345';
        ironMan.country = 'USA';
        ironMan.phone = '1234567890';
        ironMan.fax = '1234567890';
        ironMan.email = 'iron.man@avengers.com';

        return ironMan;
    }
    
    static Thor():Address {
        let thor = new Address();

        thor.name = 'Thor';
        thor.organization = 'Avengers';
        thor.street_address = 'Asgard';
        thor.city = 'Asgard HQ';
        thor.region = 'Midgard';
        thor.zip_code = '12345';
        thor.country = '???';
        thor.phone = '1234567890';
        thor.fax = '1234567890';
        thor.email = 'god.of.thunder@avengers.com';

        return thor;
    }
}