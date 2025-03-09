import { useEffect, useState } from "react";
import { Container, Typography, Card, CardContent, Button, CardMedia, Grid2, Box } from "@mui/material";
import { Link } from "react-router-dom";
import { recipes as recipesData } from "../data/recipes"; 

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);

  // useEffect(() => {
  //   setRecipes(recipesData); 
  // }, []);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/recipes");
        const data = await response.json();
        setRecipes(data);
      } catch (error) {
        console.error("Error fetching recipes:", error);
      }
    };
  
    fetchRecipes();
  }, []);
  

  return (
    <Container className="container" sx={{ mt: 5, textAlign: "center" }}>
      <Typography variant="h4" gutterBottom>
        Recipes
      </Typography>
      <Grid2 className="recipes-grid" container spacing={3} justifyContent="center">
        {recipes.map((recipe) => (
          <Grid2 item xs={12} sm={6} md={4} key={recipe.id}>
            <Card className="recipe-card" sx={{ maxWidth: 400, width: "100%", mx: "auto", boxShadow: 3, display: "flex", flexDirection: "column" }}>
              <CardMedia
                component="img"
                height="200"
                image={recipe.image}
                alt={recipe.name}
                sx={{ objectFit: "cover", backgroundColor: "#fff" }}
              />
              <CardContent sx={{ flexGrow: 1, display: "flex", flexDirection: "column", alignItems: "center" }}>
                <Typography variant="h6" gutterBottom>
                  {recipe.name}
                </Typography>
                <Box mt="auto">
                  <Button component={Link} to={`/recipe/${recipe.id}`} variant="contained" color="primary">
                    View Recipe
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid2>
        ))}
      </Grid2>
    </Container>
  );
};

export default Recipes;




// import { useEffect, useState } from "react";
// import { Container, Typography, Card, CardContent, Button, CardMedia, Grid2, Box } from "@mui/material";
// import { Link } from "react-router-dom";
// import { recipes as recipesData } from "../data/recipes"; // Import centralized recipes data


// const Recipes = () => {
//   const [recipes, setRecipes] = useState([]);

//   useEffect(() => {
//     setRecipes(recipesData); // Load recipes from the data file
//   }, []);

//   return (
//     <Container className="container" sx={{ mt: 5, textAlign: "center" }}>
//       <Typography variant="h4" gutterBottom>
//         Recipes
//       </Typography>
//       <Grid2 className="recipes-grid" container spacing={3} justifyContent="center">
//         {recipes.map((recipe) => (
//           <Grid2 item xs={12} sm={6} md={4} key={recipe.id}>
//             <Card className="recipe-card" sx={{ maxWidth: 400, width: "100%", mx: "auto", boxShadow: 3, display: "flex", flexDirection: "column" }}>
//               <CardMedia
//                 component="img"
//                 height="200"
//                 image={recipe.image}
//                 alt={recipe.name}
//                 sx={{ objectFit: "cover", backgroundColor: "#fff" }}
//               />
//               <CardContent sx={{ flexGrow: 1, display: "flex", flexDirection: "column", alignItems: "center" }}>
//                 <Typography variant="h6" gutterBottom>
//                   {recipe.name}
//                 </Typography>
//                 <Box mt="auto">
//                   <Button component={Link} to={`/recipe/${recipe.id}`} variant="contained" color="primary">
//                     View Recipe
//                   </Button>
//                 </Box>
//               </CardContent>
//             </Card>
//           </Grid2>
//         ))}
//       </Grid2>
//     </Container>
//   );
// };

// export default Recipes;




