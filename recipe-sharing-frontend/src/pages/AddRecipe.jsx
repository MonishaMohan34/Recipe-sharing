import React, { useState } from "react";
import { TextField, Button, Paper, Box, Typography } from "@mui/material";
import ReactFlow, { Handle } from "reactflow";
import "reactflow/dist/style.css";

const AddRecipe = () => {
  const [dishName, setDishName] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState([]);
  const [stepInput, setStepInput] = useState("");
  const [timeInput, setTimeInput] = useState("");

  // Function to add a new step
  const addStep = () => {
    if (stepInput && timeInput) {
      setSteps([...steps, { step: stepInput, time: timeInput }]);
      setStepInput("");
      setTimeInput("");
    }
  };

  // Prepare nodes for flowchart
  const nodes = steps.map((step, index) => ({
    id: String(index + 1),
    position: { x: 100, y: index * 100 },
    data: { label: `${step.step} (${step.time} min)` },
    type: "default",
  }));

  // Prepare edges (connections between steps)
  const edges = steps
    .map((_, index) => ({
      id: `e${index}-${index + 1}`,
      source: String(index),
      target: String(index + 1),
    }))
    .slice(0, -1);

  return (
    <Box sx={{ maxWidth: 800, margin: "auto", mt: 4, p: 3 }}>
      <Typography variant="h4" textAlign="center" mb={3}>
        Add Your Recipe
      </Typography>

      <Paper sx={{ p: 3, mb: 3 }}>
        <TextField
          fullWidth
          label="Dish Name"
          variant="outlined"
          value={dishName}
          onChange={(e) => setDishName(e.target.value)}
          sx={{ mb: 2 }}
        />
        <TextField
          fullWidth
          label="Ingredients (comma-separated)"
          variant="outlined"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          sx={{ mb: 2 }}
        />
      </Paper>

      <Paper sx={{ p: 3, mb: 3 }}>
        <Typography variant="h6" mb={2}>
          Cooking Workflow
        </Typography>
        <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
          <TextField
            label="Step Description"
            fullWidth
            value={stepInput}
            onChange={(e) => setStepInput(e.target.value)}
          />
          <TextField
            label="Time (minutes)"
            type="number"
            sx={{ width: 120 }}
            value={timeInput}
            onChange={(e) => setTimeInput(e.target.value)}
          />
        </Box>
        <Button variant="contained" onClick={addStep}>
          Add Step
        </Button>
      </Paper>

      <Paper sx={{ p: 3 }}>
        <Typography variant="h6" mb={2}>
          Cooking Flowchart
        </Typography>
        <Box sx={{ height: 300, background: "#f5f5f5", p: 2 }}>
          <ReactFlow nodes={nodes} edges={edges} fitView />
        </Box>
      </Paper>
    </Box>
  );
};

export default AddRecipe;
