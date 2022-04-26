import cors from "cors";
import express, { Application, Request, Response } from "express";
import helmet from "helmet";
import { MockController } from "./controller/mockController";
import { WhoIsController } from "./controller/whoIsController";
import { WhoIsResponse } from "./model/whoIsResponse";

const app: Application = express();
const port = 7001;

let mockController = new MockController();
let whoIsController = new WhoIsController();

// Body parsing Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(helmet());
app.use(cors());
app.use(express.json());

app.get(
    "/",

    async (req: Request, res: Response): Promise<Response> => {
        return res.status(200).send({
            message: "Hello World!",
        });
    }
);

//to keep a free account going during local testing
app.get(
    "/whois/mock",

    async (req: Request, res: Response): Promise<Response> => {
        return res.status(200).send(mockController.get());
    });

//the real deal 
app.get(
    "/whois/:domain",

    (req: Request, res: Response) => {
        const domain: string = req.params.domain;

        try{
            whoIsController
                .get(domain)
                .then(response => res.status(200)
                .send(response as WhoIsResponse));
        } catch (error) {
            let message;
            if(error instanceof Error) message = error.message;
            res.status(500).send(message);
        }
    }); 

try {
    app.listen(port, (): void => {
        console.log(`Connected successfully on port ${port}`);
    });
} catch (error: any) {
    console.error(`Error occured: ${error?.message}`);
}
