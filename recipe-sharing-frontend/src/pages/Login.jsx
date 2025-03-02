import { useState } from "react";
import { TextField, Button, Container, Typography } from "@mui/material";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log("Logging in:", email, password);
  };

  return (
    <Container maxWidth="xs">
      <Typography variant="h4" textAlign="center" mt={5}>
        Login
      </Typography>
      <TextField label="Email" fullWidth margin="normal" value={email} onChange={(e) => setEmail(e.target.value)} />
      <TextField label="Password" fullWidth margin="normal" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <Button variant="contained" fullWidth onClick={handleLogin} sx={{ mt: 2 }}>
        Login
      </Button>
    </Container>
  );
};

export default Login;
