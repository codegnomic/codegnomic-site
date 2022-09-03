import { Client as Appwrite, Databases, Account } from "appwrite";
import { env } from '$env/dynamic/public';

const server = {
    endpoint: env.PUBLIC_AW_ENDPOINT,
    project: env.PUBLIC_AW_PROJECT,
    collection: env.PUBLIC_AW_COLLECTION,
    database: env.PUBLIC_AW_DATABASE,
};

const client = new Appwrite();
const account = new Account(client);
const database = new Databases(client, server.database);
client.setEndpoint(server.endpoint).setProject(server.project);

const sdk = {account, database};
export {sdk, server};
