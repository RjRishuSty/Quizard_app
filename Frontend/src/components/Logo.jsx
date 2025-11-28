import { Box, useMediaQuery } from "@mui/material";
import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Logo = () => {
  const miniLaptop = useMediaQuery("(max-width:1110px)");
  return (
    <Box sx={{ flexGrow: miniLaptop ? 1 : 0 }}>
      <Link to="/" style={{ display: "inline-block" }}>
        <Box
          component="img"
          src={logo}
          alt="QUIZARD"
          sx={{ width: miniLaptop ? 150 : 200, p: 1 }}
        />
      </Link>
    </Box>
  );
};

export default Logo;
