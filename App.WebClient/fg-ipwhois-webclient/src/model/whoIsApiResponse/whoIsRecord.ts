import { Audit } from "./audit";
import { Contact } from "./contact";
import { NameServers } from "./nameServers";
import { RegistryData } from "./registry";

export class WhoIsRecord {
	createdDate: string = '';
	updatedDate: string = '';
	expiresDate: string = '';

	domainName: string = '';
	status: string = '';
	rawText: string = '';
	parseCode: string = '';
	header: string = '';
	strippedText: string = '';
	footer: string = '';
	registrarName: string = '';
	registrarIanaId: string = '';
	contactemail: string = '';
	domainNameExt: string = '';
	estimatedDomainAge: number = 0;

	registrant: Contact = new Contact();
	administrativeContact: Contact = new Contact();
	technicalContact: Contact = new Contact();
	nameServers: NameServers = new NameServers();
	audit: Audit = new Audit();
	registryData: RegistryData = new RegistryData();
}