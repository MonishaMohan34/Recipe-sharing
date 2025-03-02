import { useParams } from "react-router-dom";
import { recipes } from "../data/recipes"; // Import centralized recipes data
import { Container, Grid2, Typography, Card, CardMedia } from "@mui/material";
import "../App.css"; // Import CSS file

const RecipeDetails = () => {
  const { id } = useParams();
  const recipe = recipes.find((r) => r.id === parseInt(id));

  if (!recipe) {
    return <Typography variant="h4" textAlign="center">Recipe Not Found!</Typography>;
  }

  return (
    <Container className="recipe-details">
      <Grid2 container spacing={4} className="recipe-details-grid">
        {/* Left: Recipe Image */}
        <Grid2 item xs={12} md={5}>
          <Card className="recipe-card">
            <CardMedia
              component="img"
              image={recipe.image}
              alt={recipe.name}
              className="recipe-image"
            />
          </Card>
        </Grid2>

        {/* Right: Recipe Details */}
        <Grid2 item xs={12} md={7} className="recipe-content">
          <Typography variant="h3" className="recipe-title">{recipe.name}</Typography>
          <Typography variant="h5" className="recipe-subtitle">Ingredients:</Typography>
          <Typography variant="body1" className="recipe-text">{recipe.ingredients.join(", ")}</Typography>

          <Typography variant="h5" className="recipe-subtitle">Instructions:</Typography>
          {recipe.instructions.map((step, index) => (
            <Typography key={index} variant="body1" className="recipe-step">➤ {step}</Typography>
          ))}
        </Grid2>
      </Grid2>
    </Container>
  );
};

export default RecipeDetails;



// import { useParams } from "react-router-dom";
// import { recipes } from "../data/recipes"; // Import centralized recipes data
// import { Container, Grid2, Typography, Card, CardMedia, CardContent } from "@mui/material";
// import "../App.css"; // Import CSS file

// const RecipeDetails = () => {
//   const { id } = useParams(); // Get recipe ID from the URL
//   const recipe = recipes.find((r) => r.id === parseInt(id)); // Find recipe by ID



//   if (!recipe) {
//     return <Typography variant="h4" textAlign="center">Recipe Not Found!</Typography>;
//   }

//   return (
//     <Container className="recipe-details">
//       <Grid2 container spacing={4} className="recipe-details-grid">
//         {/* Left: Recipe Image */}
//         <Grid2 item xs={12} md={5}>
//           <Card className="recipe-card">
//             <CardMedia
//               component="img"
//               image={recipe.image}
//               alt={recipe.name}
//               className="recipe-image"
//             />
//           </Card>
//         </Grid2>

//         {/* Right: Recipe Details */}
//         <Grid2 item xs={12} md={7} className="recipe-content">
//           <Typography variant="h3" className="recipe-title">{recipe.name}</Typography>
//           <Typography variant="h5" className="recipe-subtitle">Ingredients:</Typography>
//           <Typography variant="body1" className="recipe-text">{recipe.ingredients.join(", ")}</Typography>

//           <Typography variant="h5" className="recipe-subtitle">Instructions:</Typography>
//           {recipe.instructions.map((step, index) => (
//             <Typography key={index} variant="body1" className="recipe-step">➤ {step}</Typography>
//           ))}
//         </Grid2>
//       </Grid2>
//     </Container>
//   );
// };

// export default RecipeDetails;









