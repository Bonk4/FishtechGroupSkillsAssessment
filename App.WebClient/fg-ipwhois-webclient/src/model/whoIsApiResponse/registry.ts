import { Audit } from "./audit";
import { NameServers } from "./nameServers";

export class RegistryData {
	createdDate: string = '';
	updatedDate: string = '';
	expiresDate: string = '';
	domainName: string = '';
	status: string = '';
	rawText: string = '';
	header: string = '';
	strippedText: string = '';
	footer: string = '';
	registrarName: string = '';
	registrarIANAID: string = '';
	createdDateNormalized: string = '';
	updatedDateNormalized: string = '';
	rxpiresDateNormalized: string = '';
	whoisServer: string = '';
	parseCode: number = 0;

	audit: Audit = new Audit();
	nameServers: NameServers = new NameServers();
}