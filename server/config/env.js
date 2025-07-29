import dotenv from "dotenv";
dotenv.config();

export const JWT_SECRETS = process.env.JWT_SECRET;