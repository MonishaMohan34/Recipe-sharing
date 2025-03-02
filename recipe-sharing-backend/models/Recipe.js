
// const mongoose = require("mongoose");

// const recipeSchema = new mongoose.Schema({
//   name: String,
//   ingredients: [String],
//   instructions: String
// });

// const Recipe = mongoose.models.Recipe || mongoose.model("Recipe", recipeSchema);

const mongoose = require("mongoose");

const recipeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  ingredients: { type: [String], required: true },
  instructions: { type: String, required: true },
});

const Recipe = mongoose.models.Recipe || mongoose.model("Recipe", recipeSchema);

module.exports = Recipe;



