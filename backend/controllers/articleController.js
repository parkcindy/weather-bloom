import { getArticles } from "../database/db.js";

export async function fetchArticles(req, res) {
    try {
        const articles = await getArticles();
        res.status(200).json(articles);
    } catch (error) {
        console.error("Error fetching artilces:", error.message);
        res.status(500).send("Gagal mengambil artikel");
    }
}