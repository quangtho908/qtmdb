import { config } from "dotenv";
config();
export const database = {
    uri: process.env.DATABASE_URI
}

export const application = {
    host: process.env.HOST || "localhost",
    port: process.env.PORT || 3000,
    domain: process.env.DOMAIN || "http://localhost:3000"
}