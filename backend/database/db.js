import mysql from "mysql2/promise";

const db = mysql.createPool({
    host: process.env.DB_HOST || "localhost",
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || "",
    database: process.env.DB_NAME || "weather_bloom",
});

async function testConnection() {
    try {
        await db.getConnection();
        console.log('Koneksi berhasil ke database ${process.env.DB_NAME || "weather_bloom"} di host ${process.env.DB_HOST ||"localhost"}');
    } catch (error) {
        console.error("Gagal terhubung ke database:", error);
    }
}

async function query(command, values) {
    try {
        console.log("Running SQL Query:", command, values);
        const [value] = await db.query(command, values ?? []);
        return value;
    } catch(error) {
        console.error("Query Error:", error.message);
        throw error;    
    }
}

async function getArticles() {
    return await query("SELECT * FROM articles")
}

export { query, testConnection, getArticles };