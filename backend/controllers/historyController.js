import { query } from "../database/db.js";

export const saveWeatherHistory = async (cityId, method, weatherData, recommendation) =>{
    try {
        return await query(
            'INSERT INTO home_weather_history (city_id, search_date, method, temperature, humidity, wind_speed, recommendation) VALUES (?, NOW(), ?, ?, ?, ?, ?)',
            [
                cityId,
                method,
                weatherData.temperature,
                weatherData.humidity,
                weatherData.windSpeed,
                recommendation
            ]
        );
    } catch (error) {
        console.error("Error saving weather history:", error.message);
        throw error;
    }
};

export const getWeatherHistory= async () => {
    try {
        return await query("SELECT * FROM home_search_history ORDER BY search_date DESC+");
    } catch (error) {
        console.error("Error fetching weather history:", error.message);
        throw error;
    }
};