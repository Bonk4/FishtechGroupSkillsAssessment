import { MockData } from "../mockData";

export class MockController {
    
    //Mock of WhoIs becuase WhoIs has a free-sub request cap
    get() {
        return MockData.WhoIsMockData();
    }

}