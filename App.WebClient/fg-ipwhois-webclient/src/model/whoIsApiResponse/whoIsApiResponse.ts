import { ErrorResponse } from "../errorResponse";
import { WhoIsRecord } from "./whoIsRecord";

export class WhoIsApiResponse {
	WhoisRecord: WhoIsRecord = new WhoIsRecord();

	ErrorResponse: ErrorResponse | undefined = undefined;
}