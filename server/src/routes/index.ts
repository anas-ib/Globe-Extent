import { Router, type IRouter } from "express";
import healthRouter from "./health";

const router: IRouter = Router();

// Root handler so GET /api returns 200 (required for health checks)
router.get("/", (_req, res) => {
  res.json({ status: "ok" });
});

router.use(healthRouter);

// 404 fallback — prevents unmatched routes from returning 500
router.use((_req, res) => {
  res.status(404).json({ error: "Not found" });
});

export default router;
