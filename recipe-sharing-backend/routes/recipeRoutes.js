const express = require("express");
const Recipe = require("../models/Recipe");
const multer = require("multer");
const protect = require("../middleware/authMiddleware");

const router = express.Router();

// Image upload setup
const storage = multer.diskStorage({
  destination: "uploads/",
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage });

// Add a new recipe
router.post("/add", protect, upload.single("image"), async (req, res) => {
  const { title, ingredients, instructions } = req.body;
  const image = req.file ? req.file.filename : null;

  const newRecipe = new Recipe({ title, ingredients: ingredients.split(","), instructions, image, user: req.user.id });

  try {
    await newRecipe.save();
    res.status(201).json({ message: "Recipe added successfully" });
  } catch (error) {
    res.status(400).json({ message: "Error adding recipe" });
  }
});

// Get all recipes
router.get("/", async (req, res) => {
  const recipes = await Recipe.find().populate("user", "name");
  res.json(recipes);
});

module.exports = router;



// const express = require("express");
// const Recipe = require("../models/Recipe");
// const protect = require("../middleware/authMiddleware");

// const router = express.Router();

// // ✅ Get all recipes
// router.get("/", async (req, res) => {
//     try {
//         const recipes = await Recipe.find();
//         res.json(recipes);
//     } catch (error) {
//         res.status(500).json({ message: "Internal server error", error: error.message });
//     }
// });

// // ✅ Add a new recipe
// router.post("/", protect, async (req, res) => {
//     try {
//         const { name, ingredients, instructions } = req.body;

//         if (!name || !ingredients || !instructions) {
//             return res.status(400).json({ message: "All fields are required" });
//         }

//         const newRecipe = new Recipe({ name, ingredients, instructions });
//         await newRecipe.save();

//         res.status(201).json({ message: "Recipe added successfully", recipe: newRecipe });
//     } catch (error) {
//         res.status(500).json({ message: "Server Error", error: error.message });
//     }
// });

// module.exports = router;


// const express = require("express");
// const Recipe = require("../models/Recipe");
// const protect = require("../middleware/authMiddleware");

// const router = express.Router();

// // ✅ 1. Create a Recipe
// router.post("/", protect, async (req, res) => {
//     try {
//         const { name, ingredients, instructions } = req.body;

//         if (!name || !ingredients || !instructions) {
//             return res.status(400).json({ message: "All fields are required" });
//         }

//         const newRecipe = new Recipe({ name, ingredients, instructions });
//         await newRecipe.save();

//         res.status(201).json({ message: "Recipe added successfully", recipe: newRecipe });
//     } catch (error) {
//         res.status(500).json({ message: "Server Error", error: error.message });
//     }
// });

// // ✅ 2. Get All Recipes
// router.get("/", async (req, res) => {
//     try {
//         const recipes = await Recipe.find();
//         res.json(recipes);
//     } catch (error) {
//         res.status(500).json({ message: "Internal server error", error: error.message });
//     }
// });

// // ✅ 3. Get a Single Recipe by ID
// router.get("/:id", async (req, res) => {
//     try {
//         const recipe = await Recipe.findById(req.params.id);
//         if (!recipe) {
//             return res.status(404).json({ message: "Recipe not found" });
//         }
//         res.json(recipe);
//     } catch (error) {
//         res.status(500).json({ message: "Server Error", error: error.message });
//     }
// });

// // ✅ 4. Update a Recipe by ID
// router.put("/:id", protect, async (req, res) => {
//     try {
//         const { name, ingredients, instructions } = req.body;

//         const updatedRecipe = await Recipe.findByIdAndUpdate(
//             req.params.id,
//             { name, ingredients, instructions },
//             { new: true, runValidators: true }
//         );

//         if (!updatedRecipe) {
//             return res.status(404).json({ message: "Recipe not found" });
//         }

//         res.json({ message: "Recipe updated successfully", recipe: updatedRecipe });
//     } catch (error) {
//         res.status(500).json({ message: "Server Error", error: error.message });
//     }
// });

// // ✅ 5. Delete a Recipe by ID
// router.delete("/:id", protect, async (req, res) => {
//     try {
//         const deletedRecipe = await Recipe.findByIdAndDelete(req.params.id);
//         if (!deletedRecipe) {
//             return res.status(404).json({ message: "Recipe not found" });
//         }
//         res.json({ message: "Recipe deleted successfully" });
//     } catch (error) {
//         res.status(500).json({ message: "Server Error", error: error.message });
//     }
// });

// module.exports = router;
