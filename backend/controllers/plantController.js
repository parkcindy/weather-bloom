import { query } from "../database/db.js";

export const getWeatherData = async () => {
    try {
        const weather = await query("SELECT * FROM home_weather_data");
        res.json(weather);
    } catch (error) {
        console.error("Error fetching weather information:", error);
        res.status(500).send("Error fetching weather data");
    }
};