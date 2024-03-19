import db from "../db/connection.js";
import Recipe from "../models/Recipe.js";
import User from "../models/user.js";
import bcrypt from "bcrypt";

const insertData = async () => {
  // reset database
  await db.dropDatabase();
};
