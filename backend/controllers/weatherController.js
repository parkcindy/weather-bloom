import axios from "axios";
import { saveWeatherInput } from '../database/db.js';
import { saveWeatherHistory } from './historyController.js';

export const getWeatherDataByInput = async (temperature, humidity, windSpeed, city = "Madrid") => {
    try {
        await saveWeatherInput(temperature, humidity, windSpeed);

        const response = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
            params: {
                appid: process.env.API_KEY,
                q: city,
                units: "metric"
            }
        });

        const weatherData = response.data;

        const apiData = {
            location: weatherData.name,
            temperature: weatherData.main.temp,
            humidity: weatherData.main.humidity,
            windSpeed: weatherData.main.speed,
            weather: weatherData.weather[0].description,
        };

            let recommendation = "Tanaman tidak tersedia untuk cuaca ini.";
            if (apiData.weather.includes("rain")) {
                recommendation = "Padi, Kangkung, Bayam";
            } else if (apiData.weather.includes("clear")) {
                recommendation = "Tomat, Cabai, Melon";
            } else if (apiData.weather.includes("cloud")) {
                recommendation = "Jahe, Kunyit, Daun Mint";
            } else if (apiData.weather.includes("wind")) {
                recommendation = "Bambu, Pohon Jambu";
            }

            await saveWeatherHistory(city, "manual", apiData, recommendation);

            return {
                input: {
                    temperature,
                    humidity,
                    windSpeed,
                },
                apiData,
                recommendation,
            };

    } catch (error) {
        console.error("Error fetching or processing weather data:", error.message);
        throw new Error("Failed to process weather input or fetch API data.");
    }
};