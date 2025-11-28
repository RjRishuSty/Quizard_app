import { Box, Typography, Button, Card } from "@mui/material";
import React from "react";

const Cards = ({ item }) => {
  return (
    <Card
      sx={{
        bgcolor: "rgba(255,255,255,0.08)",
        p: { xs: 3,sm:4, md: 6 },
        borderRadius: 3,
        color: "inherit",
        backdropFilter: "blur(4px)",
      }}
    >
      <Typography
        variant="h2"
        sx={{
          fontSize: { xs: "1.8rem", md: "2.4rem" },
          fontWeight: 800,
          mb: 2,
        }}
      >
        {item.title}
      </Typography>

      <Typography variant="body1" sx={{ mb: 3, color: "inherit" }}>
        {item.description}
      </Typography>

      <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
        {item.primaryBtn && (
          <Button
            variant={item.primaryBtn.variant}
            color="secondary"
            size="large"
          >
            {item.primaryBtn.text}
          </Button>
        )}

        {item.secondaryBtn && (
          <Button
            variant={item.secondaryBtn.variant}
            sx={{
              color: "inherit",
              borderColor: "rgba(255,255,255,0.3)",
            }}
            size="large"
          >
            {item.secondaryBtn.text}
          </Button>
        )}
      </Box>
    </Card>
  );
};

export default Cards;
