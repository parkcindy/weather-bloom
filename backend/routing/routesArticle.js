import express from "express";
import { query } from "./db.js";

const router = express.Router();

router.post('/add-data', async (req, res) => {
    const { temperature_range, humidity_range, weather_condition, plant_recommendation } = req.body;
    try {
        await query(
            'INSERT INTO home_plant_recommendation (temperature_range, humidity_range, weather_condition, plant_recommendation) VALUES (?, ?, ?, ?)',
            [temperature_range, humidity_range, weather_condition, plant_recommendation]
        );
        res.status(201).send('Data berhasil ditambahkan!');
    } catch (error) {
        console.error(error);
        res.status(500).send('Gagal menambahkan data');
    }
});

export default router;
