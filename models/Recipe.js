import mongoose from "mongoose";
const Schema = mongoose.Schema;

const Recipe = new Schema(
  {
    title: { type: String, required: true },
    image: { type: String, required: true },
    // Ingredients: { type: [String], required: true },
    summary: { type: String, required: true },
    // analyzedInstructions: { type: [String], required: true },
    sourceUrl: { type: [String], required: true },
    cuisines: { type: [String], required: true },
    steps: { type: [Schema.Types.Mixed] },
  },
  { timestamps: true }
);

export default mongoose.model("recipes", Recipe);
