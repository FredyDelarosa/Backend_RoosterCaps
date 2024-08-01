import mysql from "mysql2/promise";
import dotenv from "dotenv";
import { Signale } from "signale";

// Cargar las variables de entorno
dotenv.config();

const signale = new Signale();

const config = {
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT || "3306", 10),
  user: process.env.DB_USER,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  waitForConnections: true,
  connectionLimit: 10,
  namedPlaceholders: true,
  authPlugins: {
    mysql_clear_password: () => () => Buffer.from(process.env.DB_PASSWORD + '\0')
  }
};

// Crear el pool de conexiones
const pool = mysql.createPool(config);

export async function query(sql: string, params?: any[]) {
  try {
    const conn = await pool.getConnection();
    signale.success("Conexión exitosa a la BD");
    const [result] = await conn.execute(sql, params);  // Desestructura el resultado
    conn.release();
    return result;
  } catch (error) {
    signale.error(error);
    return null;
  }
}

export default pool;
