import { config } from "dotenv";
config();

export const PORT = process.env.PORT || 3000;
export const DB_USER = process.env.DB_USER || "sa";
export const DB_PASSWORD = process.env.DB_PASSWORD || "Aza-123ortiz";
export const DB_SERVER = process.env.DB_SERVER || "localhost";
export const DB_DATABASE = process.env.DB_DATABASE || "GDA00261-OT-AzariasOrtiz";