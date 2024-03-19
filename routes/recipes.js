import { Router } from "express";
import * as controllers from "../controllers/recipes.js";
import restrict from "../helpers/restrict.js";

const router = Router();

router.get("/recipies", controllers.getRecipies);
// router.get("recipes/:cuisines", controllers.getRecipesByCuisines);
router.get("/recipies/:id", controllers.getRecipe);
router.post("/recipies", restrict, controllers.createRecipe);
router.put("/recipies/:id", restrict, controllers.updateRecipe);
router.delete("/recipies/:id", restrict, controllers.deleteRecipe);

export default router;
