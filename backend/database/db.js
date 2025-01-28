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
        console.error("Gagal terhubung ke database:", error.message);
        throw error;
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

async function saveWeatherInput(temperature, humidity, windSpeed) {
    try {  
        return await query(
            "INSERT INTO weather_input (temperature, humidity, wind_speed) VALUES (?, ?, ?)",
            [temperature, humidity, windSpeed]
        );
    } catch (error) {
        console.error("Error saving weather input:", error.message);
        throw error;
    }
}

async function getArticles() {
    try {
        return await query("SELECT * FROM articles");
    } catch (error) {
        console.error("Error fetching articles:", error.message);
        throw error;
    }
}

export { query, testConnection, saveWeatherInput, getArticles };



