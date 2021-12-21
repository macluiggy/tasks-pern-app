import { db } from "./config";
import { Pool } from "pg";
import dotenv from "dotenv";
dotenv.config();

const pool = new Pool(db);
export default pool;
