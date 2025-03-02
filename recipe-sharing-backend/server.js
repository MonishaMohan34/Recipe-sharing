const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");

dotenv.config();
connectDB();

const app = express();
app.use(express.json());
app.use(cors());
app.use("/uploads", express.static("uploads"));

app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/recipes", require("./routes/recipeRoutes"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


app.get("/", (req, res) => {
    res.send("API is working!");
  });
  
app.use("/api/users", require("./routes/userRoutes"));
require("dotenv").config();

const Recipe = require("./models/Recipe");

app.get("/recipes", async (req, res) => {
    try {
      const recipes = await Recipe.find();
      res.json(recipes);
    } catch (error) {
      console.error("Error fetching recipes:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  });



app.post("/recipes", async (req, res) => {
try {
    const { name, ingredients, instructions } = req.body;
  
    if (!name || !ingredients || !instructions) {
    return res.status(400).json({ message: "All fields are required" });
    }
  
    const newRecipe = new Recipe({ name, ingredients, instructions });
    await newRecipe.save();
  
    res.status(201).json({ message: "Recipe added successfully", recipe: newRecipe });
} catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
}
});
  
// const express = require("express");
// const dotenv = require("dotenv");
// const cors = require("cors");
// const connectDB = require("./config/db");

// dotenv.config();
// connectDB();

// const app = express();
// app.use(express.json());
// app.use(cors());
// app.use("/uploads", express.static("uploads"));

// // Routes
// app.use("/api/users", require("./routes/userRoutes"));
// app.use("/api/recipes", require("./routes/recipeRoutes"));

// const PORT = process.env.PORT || 5000;

// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// // Base route
// app.get("/", (req, res) => {
//     res.send("API is working!");
// });
