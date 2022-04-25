import { Audit } from "./audit";
import { NameServers } from "./nameServers";

export class RegistryData {
	CreatedDate: string = '';
	UpdatedDate: string = '';
	ExpiresDate: string = '';
	DomainName: string = '';
	Status: string = '';
	RawText: string = '';
	Header: string = '';
	StrippedText: string = '';
	Footer: string = '';
	RegistrarName: string = '';
	RegistrarIANAID: string = '';
	CreatedDateNormalized: string = '';
	UpdatedDateNormalized: string = '';
	ExpiresDateNormalized: string = '';
	WhoisServer: string = '';

	Audit: Audit = new Audit();
	NameServers: NameServers = new NameServers();
	ParseCode: number = 0;
}