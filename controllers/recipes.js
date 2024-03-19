import Recipe from "../models/Recipe.js";

export const getRecipies = async (req, res) => {
  try {
    const recipies = await Recipe.find();
    res.json(recipies);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};
