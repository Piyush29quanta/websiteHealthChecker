import { Router } from "express";
import { checkHealth } from "../controllers/checkController.js";

const router = Router();

router.get("/:domain", async (req, res) => {
  const domain = req.params.domain;

  try {
    const report = await checkHealth(domain);
    res.json(report);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
