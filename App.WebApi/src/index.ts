import cors from "cors";
import express, { Application, Request, Response } from "express";
import helmet from "helmet";

const app: Application = express();
const port = 7000;

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
        return res.status(200).send({
            message: "Hello World!",
        });
    });

//the real deal 
app.get(
    "/whois/",

    async (req: Request, res: Response): Promise<Response> => {
        return res.status(200).send({
            message: "Hello World!",
        });
    }); 

try {
    app.listen(port, (): void => {
        console.log(`Connected successfully on port ${port}`);
    });
} catch (error: any) {
    console.error(`Error occured: ${error?.message}`);
}
