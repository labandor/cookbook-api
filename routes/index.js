import { Router } from "express";
import recipesRoutes from "./recipes.js";
import usersRoutes from "./users.js";

const router = Router();

router.get("/", (req, res) => res.send("This is the api root!"));

router.use("/", usersRoutes);
router.use("/", recipesRoutes);

export default router;
