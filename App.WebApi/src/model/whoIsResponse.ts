import { Audit } from "./audit";
import { Contact } from "./contact";
import { NameServers } from "./nameServers";
import { RegistryData } from "./registryData";

export class WhoIsResponse {
	CreatedDate: string = '';
	UpdatedDate: string = '';
	ExpiresDate: string = '';
	DomainName: string = '';
	Status: string = '';
	RawText: string = '';
	ParseCode: string = '';
	Header: string = '';
	StrippedText: string = '';
	Footer: string = '';
	RegistrarName: string = '';
	RegistrarIanaId: string = '';
	Contactemail: string = '';
	DomainNameExt: string = '';
	EstimatedDomainAge: number = 0;

	Registrant: Contact = new Contact();
	AdministrativeContact: Contact = new Contact();
	TechnicalContact: Contact = new Contact();
	NameServers: NameServers = new NameServers();
	Audit: Audit = new Audit();
	RegistryData: RegistryData = new RegistryData();
}