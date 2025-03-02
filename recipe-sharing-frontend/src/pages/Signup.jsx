import { useState } from "react";
import { TextField, Button, Container, Typography } from "@mui/material";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = () => {
    console.log("Signing up:", name, email, password);
  };

  return (
    <Container maxWidth="xs">
      <Typography variant="h4" textAlign="center" mt={5}>
        Sign Up
      </Typography>
      <TextField label="Name" fullWidth margin="normal" value={name} onChange={(e) => setName(e.target.value)} />
      <TextField label="Email" fullWidth margin="normal" value={email} onChange={(e) => setEmail(e.target.value)} />
      <TextField label="Password" fullWidth margin="normal" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <Button variant="contained" fullWidth onClick={handleSignup} sx={{ mt: 2 }}>
        Sign Up
      </Button>
    </Container>
  );
};

export default Signup;
