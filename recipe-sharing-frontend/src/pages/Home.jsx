import { Container, Typography, Button, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import backgroundImage from "./italian.jpg";
const Home = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        backgroundImage: `url(${backgroundImage})`,
        //backgroundImage: "url('https://img.freepik.com/free-photo/top-view-bean-soup-delicious-cooked-soup-with-vegetables-dark-surface-soup-bean-color-spicy-meal_140725-74430.jpg?ga=GA1.1.980296472.1739984781&semt=ais_hybrid')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        textAlign: "center",
        padding: "20px",
      }}
    >
      <Typography variant="h2" fontWeight="bold">
        Welcome to the Recipe Sharing Platform!
      </Typography>
      <Typography variant="h5" mt={2} maxWidth="600px">
        Share, explore, and create amazing recipes from around the world.
      </Typography>
      <Button
        variant="contained"
        color="secondary"
        sx={{ mt: 4, padding: "10px 20px", fontSize: "18px" }}
        onClick={() => navigate("/add-recipe")}
      >
        Add Your Recipe
      </Button>
    </Box>
  );
};

export default Home;











// import { Container, Typography } from "@mui/material";

// const Home = () => {
//   return (
//     <Container>
//       <Typography variant="h3" textAlign="center" mt={5}>
//         Welcome to the Recipe Sharing Platform!
//       </Typography>
//       <Typography variant="h6" textAlign="center" mt={2}>
//         Share, explore, and create amazing recipes.
//       </Typography>
//     </Container>
//   );
// };

// export default Home;
