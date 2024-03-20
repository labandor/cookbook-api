import db from "../db/connection.js";
import data from "./vietnamese.json" assert { type: "json" };

import Recipe from "../models/Recipe.js";

let mexicanData = data.map((item) => {
  const mexican = {};

  typeof item.image == "string"
    ? (mexican.image = item.image)
    : mexican.image.length > 0
    ? (mexican.image = item.image[0])
    : (mexican.image = "");

  mexican.title = item.title;
  // mexican.Ingredients = item.ingredients;
  // mexican.analyzedInstructions = item.instructions;
  mexican.cuisines = item.cuisines;
  mexican.sourceUrl = item.source;

  typeof item.sourceUrl == "string"
    ? (mexican.sourceUrl = item.sourceUrl)
    : mexican.sourceUrl.length > 0
    ? (mexican.sourceUrl = item.sourceUrl[0])
    : (mexican.sourceUrl = "");

  mexican.summary = item.summary;
  console.log(item.analyzedInstructions[0].steps);
  mexican.steps = item.analyzedInstructions[0].steps.map((item) => {
    return {
      step: item.step,
      ingredients: item.ingredients.map((ingredient) => ingredient.name),
    };
  });
  //   turkish.sourceUrl = item.source

  return mexican;
});

// Recipe.deleteMany({}).then(() =>
  Recipe.create(mexicanData)
    .then(() => console.log("done!"))
    .then(() => db.close())
    .catch((error) => console.error("Error", error))
;
