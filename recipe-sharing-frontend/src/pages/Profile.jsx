import React from "react";
import { Container, Grid2, Typography, Card, CardContent, Avatar } from "@mui/material";

const Profile = () => {
  // Dummy user details (replace with actual user data)
  const user = {
    profilePic: "https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg?ga=GA1.1.980296472.1739984781&semt=ais_hybrid", // Replace with actual image URL
    name: "Monisha M",
    username: "monisha_ai",
    contact: "+91 98765 43210",
    email: "monisha@example.com",
    department: "Artificial Intelligence & Data Science",
    college: "Rajalakshmi Engineering College",
  };

  return (
    <Container maxWidth="md" sx={{ mt: 5 }}>
      <Card sx={{ p: 3, boxShadow: 3 }}>
        <Grid2 container spacing={3} alignItems="centre">
          {/* Left Side - Profile Picture */}
          <Grid2 item xs={12} sm={4} display="flex" justifyContent="centre">
            <Avatar 
              src={user.profilePic} 
              alt={user.name} 
              sx={{ width: 150, height: 150, border: "3px solid #1976d2" }}
            />
          </Grid2>

          {/* Right Side - User Details */}
          <Grid2 item xs={12} sm={8}>
            <CardContent>
              <Typography variant="h4" fontWeight="bold" gutterBottom>
                {user.name}
              </Typography>
              <Typography variant="h6" color="textSecondary">
                @{user.username}
              </Typography>
              <Typography variant="body1" mt={1}><strong>Contact:</strong> {user.contact}</Typography>
              <Typography variant="body1"><strong>Email:</strong> {user.email}</Typography>
              <Typography variant="body1"><strong>Department:</strong> {user.department}</Typography>
              <Typography variant="body1"><strong>College:</strong> {user.college}</Typography>
            </CardContent>
          </Grid2>
        </Grid2>
      </Card>
    </Container>
  );
};

export default Profile;


// function RecipeDetails() {
//     return <h1>Profile</h1>;
//   }
  
//   export default RecipeDetails;
  