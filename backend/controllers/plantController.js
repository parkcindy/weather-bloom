import { query } from "../database/db.js";

export const getPlantRecommendation = async () => {
    try {
        const plants = await query("SELECT * FROM home_plant_recommendation");
        res.json(plants);
    } catch (error) {
        console.error("Error fetching plants", error);
        res.status(500).send("Error fetching plants");
    }
    
};