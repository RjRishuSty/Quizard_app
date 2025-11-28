import React from "react";
import HeroSection from "../components/HeroSection";
import SearchBox from "../components/SearchBox";
import { Box } from "@mui/material";

const HomePage = () => {
  return (
    <Box sx={{ minHeight: "220vh" }}>
      <HeroSection />
      <Box sx={{ border: "2px solid red", }}>
      </Box>
    </Box>
  );
};

export default HomePage;
