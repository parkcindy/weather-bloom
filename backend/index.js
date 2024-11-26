    import express from "express";
    import cors from "cors";
    import dotenv from "dotenv";
    import { getWeatherData, getWeatherDataByInput} from "./controllers/weatherController.js";
    import { getWeatherHistory } from "./controllers/historyController.js";
    import { getPlantRecommendation } from "./controllers/plantController.js";
    import articleRoutes from "./routing/article.js"

    dotenv.config();

    const app = express();

    app.use(cors());
    app.use(express.json());

    app.get("/weather", async (req, res) => {
        try {
            const weather = await getWeatherData();
            res.json(weather);
        } catch (error) {
            console.error("Error fetching weather information:", error);
            res.status(500).send("Error fetching weather data");
        }
    });

    app.post("/weatherinput", async (req, res) => {
        const { temperature, humidity, windSpeed, city } = req.body;

        if (!temperature || !humidity || !windSpeed || !city ) {
            return res.status(400).json({error: "All fields (temperature, humidity, windSpeed, city) are required."});
        }

        try {
            const result = await getWeatherDataByInput(temperature, humidity, windSpeed, city);
            res.json(result);
        } catch (error) {
            console.error("Error processing weather data:", error.message);
            res.status(500).json({error: "Failed to process weather input or fetch API data."});
        }
    });

    app.get("/weatherHistory", async (req, res) => {
        try {
            const history = await getWeatherHistory();
            res.json(history);
        } catch (error) {
            console.error("Error fetching weather history:", error.message);
            res.status(500).json({error: "Failed to fetch weather history."});
        }
    });

    app.get("/plants", async (req, res) => {
        try {
            const plants = await getPlantRecommendation();
            res.json(plants);
        } catch (error) {
            console.error("Error fetching plants:", error);
            res.status(500).send("Error fetching plants");
        }
    });

    app.use("/articles", articleRoutes);

    app.listen(process.env.APP_PORT, async () => {
        console.log(`Server berjalan di http://localhost:${process.env.APP_PORT}`);
    });