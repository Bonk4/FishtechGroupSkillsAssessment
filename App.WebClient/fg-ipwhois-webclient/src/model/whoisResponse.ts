import { Domain } from "domain";
import { Address } from "./address";
import { DomainInfo } from "./domain";
import { RegistrarInfo } from "./registrarInfo";

export class WhoIsResponse {
    DomainInfo: DomainInfo = new DomainInfo();
    Registrar: RegistrarInfo = new RegistrarInfo();
    RegistrantAddress: Address = new Address();
    AdminAddress: Address = new Address();
    TechAddress: Address = new Address();
    BillingAddress: Address = new Address();
}