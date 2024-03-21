import mongoose from "mongoose";
const Schema = mongoose.Schema;

const Recipe = new Schema(
  {
    title: { type: String, required: true },
    image: { type: String, required: true },
    summary: { type: String, required: true },
    sourceUrl: { type: String, required: true },
    cuisine: { type: String, required: true },
    steps: [{ type: String, required: true }],
    ingredients: [{ type: String, required: true }],
  },
  { timestamps: true }
);

export default mongoose.model("recipes", Recipe);
