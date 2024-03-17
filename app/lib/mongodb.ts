
import { MongoClient } from "mongodb";

declare global {
    var mongodb: MongoClient | undefined;
}

const client =
    globalThis.mongodb ||
    new MongoClient(process.env.DATABASE_URL as string, {
    });
if (process.env.NODE_ENV !== 'production') globalThis.mongodb = client;

export default client;

