import db from "../db/connection.js";
import Recipe from "../models/Recipe.js";
// import User from "../models/user.js";
// import bcrypt from "bcrypt";
import frenchData from "./french.json" assert { type: "json" };
import germanData from "./german.json" assert { type: "json" };
import greekData from "./greek.json" assert { type: "json" };
import indianData from "./indian.json" assert { type: "json" };
import italianData from "./italian.json" assert { type: "json" };
import japaneseData from "./japanese.json" assert { type: "json" };
import mexicanData from "./mexican.json" assert { type: "json" };
import spanishData from "./spanish.json" assert { type: "json" };
import thaiData from "./thai.json" assert { type: "json" };
import vietnameseData from "./vietnamese.json" assert { type: "json" };

const insertData = async () => {
  // reset database
  await db.dropDatabase();

  await transformAndSaveRawData(frenchData);
  await transformAndSaveRawData(germanData);
  await transformAndSaveRawData(greekData);
  await transformAndSaveRawData(indianData);
  await transformAndSaveRawData(italianData);
  await transformAndSaveRawData(japaneseData);
  await transformAndSaveRawData(mexicanData);
  await transformAndSaveRawData(spanishData);
  await transformAndSaveRawData(thaiData);
  await transformAndSaveRawData(vietnameseData);

  console.log("Recipes Created Successfully!");

  await db.close();
};

insertData();

async function transformAndSaveRawData(rawData) {
  for (const data of rawData) {
    const ingredients = new Set();
    data.analyzedInstructions.forEach((instruction) => {
      instruction.steps.forEach((step) => {
        step.ingredients.forEach((ingredient) => {
          ingredients.add(ingredient.name);
        });
      });
    });

    const steps = data.analyzedInstructions.flatMap((instruction) =>
      instruction.steps.map((step) => step.step)
    );

    const recipe = new Recipe({
      title: data.title,
      image: data.image,
      summary: data.summary,
      sourceUrl: data.sourceUrl,
      cuisine: data.cuisines[0] || "Unknown",
      ingredients: [...ingredients],
      steps,
    });

    await recipe.save();
  }
}
