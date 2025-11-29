import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Box, Typography, Button, Paper, Grid } from "@mui/material";

const GenerateQuizePage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Get form data from location.state
  const formData = location.state || {};

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" fontWeight="bold" mb={3}>
        Quiz Generated Successfully
      </Typography>

      <Paper sx={{ p: 3, bgcolor: "#33204a", color: "white" }}>
        <Grid container spacing={2}>
          {Object.keys(formData).map((key) => (
            <Grid item xs={12} sm={6} key={key}>
              <Typography variant="subtitle2" sx={{ color: "#ccc" }}>
                {key}
              </Typography>
              <Typography variant="body1">
                {formData[key] instanceof File
                  ? formData[key].name
                  : formData[key]?.toString()}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Paper>

      <Box mt={3}>
        <Button
          variant="contained"
          sx={{ backgroundColor: "#9933cc", "&:hover": { backgroundColor: "#7a29a3" } }}
          onClick={() => navigate(-1)} // Go back to form
        >
          Back
        </Button>
      </Box>
    </Box>
  );
};

export default GenerateQuizePage;
