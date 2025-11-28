import { Box, useMediaQuery } from "@mui/material";
import React from "react";
import logo from "../assets/logo.png";

const Logo = () => {
  const miniLaptop = useMediaQuery("(max-width:1110px)");
  return (
    <Box sx={{flexGrow: miniLaptop?1:0}}>
    <Box
      component="img"
      src={logo}
      alt="QUIZARD"
      sx={{ width: miniLaptop?150:200, p: 1 }}
    />
    </Box>
  );
};

export default Logo;
