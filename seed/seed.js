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
  mexican.includeIngredients = item.ingredients;
  mexican.insturctionsRequired = item.instructions;
  mexican.cuisines = item.cuisines

  mexican.summary = item.summary;
  //   turkish.sourceUrl = item.source

  return mexican;
});

// Recipe.deleteMany({})
//   .then(() =>
Recipe.create(mexicanData)
  .then(() => console.log("done!"))
  .then(() => db.close())
  .catch((error) => console.error("Error", error))
