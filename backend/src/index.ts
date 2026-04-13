import express from "express";
import cors from "cors";
import { Orchestrator } from "./core/orchestrator";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Jarvis Job Backend Running 🚀");
});

app.get("/run", async (req, res) => {
    try {
        const orchestrator = new Orchestrator();
        const result = await orchestrator.run();
        res.json(result);
    } catch (error) {
        console.error("Error ejecutando orchestrator:", error);
        res.status(500).json({ error: "Error interno del servidor" });
    }
});

const PORT = 3001;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});