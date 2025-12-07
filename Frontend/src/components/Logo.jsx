import { Box, useMediaQuery } from "@mui/material";
import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const BoxMotion = motion(Box);

const Logo = () => {
  const miniLaptop = useMediaQuery("(max-width:1110px)");
  return (
    <Box sx={{ flexGrow: miniLaptop ? 1 : 0 }}>
      <Link to="/" style={{ display: "inline-block" }}>
        <BoxMotion
          component="img"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          src={logo}
          alt="QUIZARD"
          sx={{ width: miniLaptop ? 150 : 200, p: 1 }}
        />
      </Link>
    </Box>
  );
};

export default Logo;
