import { Box, Button, Container, TextField } from "@mui/material";
import React from "react";
import { flexCenter } from "../styles/flexStyles";

const SearchBox = () => {
  return (
    <Container
      sx={{
        
        bgcolor: "primary.main",
        py: 10,
        boxShadow: 4,
        borderRadius: 1,
        gap: 2,
        ...flexCenter,
      }}
    >
      <TextField
        fullWidth
        label="Enter Game Code"
        variant="outlined"
        id="search"
        placeholder="Enter Game Code"
      />
      <Button
        size="large"
        variant="contained"
        color="secondary"
        sx={{ width: { xs: "30%", sm: "40%", md: "20%" } }}
      >
        Join Game
      </Button>
    </Container>
  );
};

export default SearchBox;
