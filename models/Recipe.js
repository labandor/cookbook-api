import mongoose from "mongoose";
const Schema = mongoose.Schema;

const Recipe = new Schema(
  {
    title: { type: String, required: true },
    image: { type: String, required: true },
    includeIngredients: { type: [String], required: true },
    summary: { type: String, required: true },
    insturctionsRequired: { type: [String], required: true },
    // sourceUrl: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.model("recipes", Recipe);
