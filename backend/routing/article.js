import express from "express";
import { query } from "../database/db.js";

const router = express.Router();

router.post("/", async (req, res) => {
    const { title, image_path, full_description, service, duration, author, location } = req.body;
    try {
        const result = await query(
            `INSERT INTO article (title, image_path, full_description, service, duration, author, location)
            VALUES (?, ?, ?, ?, ?, ?, ?)`,
            [title, image_path, full_description, service, duration, author, location]
        );
        res.status(201).json({ message: "Artikel berhasil ditambahkan", id: result.insertId });
    } catch (error) {
        console.error("Error inserting article:", error);
        res.status(500).send("Error adding article");
    }
});

router.get("/", async (req, res) => {
    try {
        const articles = await query("SELECT * FROM article");
        res.json(articles);
    } catch (error) {
        console.error("Error fetching articles:", error);
        res.status(500).send("Error fetching articles");
    }
});

router.get("/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const articles = await query("SELECT * FROM article WHERE id = ?", [id]);
        if (articles.length === 0) {
            res.status(404).send("Artikel tidak ditemukan");
        } else {
            res.json(articles[0]);
        }
    } catch (error) {
        console.error("Error fetching article:", error);
        res.status(500).send("Error fetching article");
    }
});

router.put("/:id", async (req, res) => {
    const { id } = req.params;
    const { title, image_path, full_description, service, duration, author, location } = req.body;
    try {
        await query(
            `UPDATE article SET title = ?, image_path = ?, full_description = ?, service = ?, duration = ?, author = ?, location = ?
            WHERE id = ?`,
            [title, image_path, full_description, service, duration, author, location, id]
        );
        res.json({ message: "Artikel berhasil diperbarui" });
    } catch (error) {
        console.error("Error updating article:", error);
        res.status(500).send("Error updating article");
    }
});

router.delete("/:id", async (req, res) => {
    const { id } = req.params;
    try {
        await query("DELETE FROM article WHERE id = ?", [id]);
        res.json({ message: "Artikel berhasil dihapus" });
    } catch (error) {
        console.error("Error deleting article:", error);
        res.status(500).send("Error deleting article");
    }
});

export default router;
