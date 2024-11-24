import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { getWeatherData} from "./controllers/weatherController.js";
import { getPlantRecommendation } from "./controllers/plantController.js";
import { fetchArticles } from "./controllers/articleController.js";

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

app.get("/plants", async (req, res) => {
    try {
        const plants = await getPlantRecommendation();
        res.json(plants);
    } catch (error) {
        console.error("Error fetching plants:", error);
        res.status(500).send("Error fetching plants");
    }
})
app.listen(process.env.APP_PORT, async () => {
    console.log(`Server berjalan di http://localhost:${process.env.APP_PORT}`);
});

app.get("/articles", fetchArticles);