import React from "react";
import { Box, Grid } from "@mui/material";
import Cards from "./Cards";
import { heroCardsData } from "../objects/heroCards";
import { motion } from "framer-motion";
import { cardVariant, containerVariants } from "../animations/heroSection";

const GridMotion = motion(Grid);

const HeroSection = () => {
  return (
    <Box
      component="section"
      sx={{
        width: "100%",
        position: "relative",
        bgcolor: "primary.main",
        color: "primary.contrastText",
        overflow: "hidden",
        pt: { xs: 5, sm: 10, md: 20 },
        pb: { xs: 22, sm: 25, md: 30 },
      }}
    >
      <GridMotion
        variants={containerVariants}
        initial="hidden"
        animate="show"
        container
        rowSpacing={2}
        columnSpacing={3}
        alignItems="center"
        sx={{
          width: { xs: "95%", sm: "92%", md: "88%" },
          maxWidth: 1200,
          mx: "auto",
          position: "relative",
          zIndex: 2,
        }}
      >
        {heroCardsData.map((item, index) => (
          <Grid
            component={motion.div}
            variants={cardVariant}
            size={{ xs: 12, sm: 12, md: 6 }}
            key={index}
          >
            <Cards item={item} useIn="heroSection" />
          </Grid>
        ))}
      </GridMotion>

      <Box
        component="span"
        sx={{
          display: "block",
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 0,
          width: "100%",
          lineHeight: 0,
          zIndex: 1,
          pointerEvents: "none",
        }}
      >
        <svg
          viewBox="0 0 1440 200"
          preserveAspectRatio="none"
          style={{ display: "block", width: "100%", height: "200px" }}
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="100%" height="100%" fill="transparent" />
          <path
            d="M0,40 C220,140 440,140 720,120 C1000,100 1220,40 1440,60 L1440,200 L0,200 Z"
            fill="#ffffff"
          />
        </svg>
      </Box>
    </Box>
  );
};

export default HeroSection;
