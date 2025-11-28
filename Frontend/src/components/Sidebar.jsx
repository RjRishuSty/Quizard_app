import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { menuLinks } from "../objects/menuLinks";
import { Link } from "react-router-dom";

const Sidebar = ({ closeDrawer }) => {
  return (
    <Box sx={{ width: 250, p: 2 }}>
      <Typography variant="h6" sx={{ mb: 2 }}>
        Menu
      </Typography>

      {menuLinks.map((item, index) => (
        <Button
          key={index}
          component={Link}
          to={item.path}
          onClick={closeDrawer}
          sx={{ display: "block", width: "100%", textAlign: "left", mb: 1 }}
        >
          {item.label}
        </Button>
      ))}
    </Box>
  );
};

export default React.memo(Sidebar); // 🔥 Avoid re-renders
