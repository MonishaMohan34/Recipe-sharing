import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // Import the CSS file

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Recipe Sharing</h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/recipes">Recipes</Link></li>
        {/* <Route path="/recipe/:id" element={<RecipeDetails />} /> */}
        <li><Link to="/add-recipe">Add Recipe</Link></li>
        <li><Link to="/profile">Profile</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/signup">Sign Up</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;



// import { Link } from "react-router-dom";
// import { AppBar, Toolbar, Button, Typography } from "@mui/material";
// import "./Navbar.css";

// const Navbar = () => {
//   return (
//     <AppBar position="static">
//       <Toolbar>
//         <Typography variant="h6" sx={{ flexGrow: 1 }}>
//           Recipe Sharing
//         </Typography>
//         <Button color="inherit" component={Link} to="/">
//           Home
//         </Button>
//         <Button color="inherit" component={Link} to="/recipes">
//           Recipes
//         </Button>
//         <Button color="inherit" component={Link} to="/create-recipe">
//           Add Recipe
//         </Button>
//         <Button color="inherit" component={Link} to="/profile">
//           Profile
//         </Button>
//         <Button color="inherit" component={Link} to="/login">
//           Login
//         </Button>
//         <Button color="inherit" component={Link} to="/signup">
//           Sign Up
//         </Button>
//       </Toolbar>
//     </AppBar>
//   );
// };

// export default Navbar;
