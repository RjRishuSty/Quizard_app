import { Box, Typography, Button, Card, CardContent } from "@mui/material";
import React, { useState } from "react";
import { flexAround } from "../styles/flexStyles";
import { useNavigate } from "react-router-dom";
import QuizeModel from "./QuizeModel";
import { motion } from "framer-motion";
import {
  heroCardVariants,
  imageCardVariants,
} from "../animations/cardAnimations";
import { fadeUp, staggerChildren } from "../animations/commanAnimations";

const CardMotion = motion(Card);
const BoxMotion = motion(Box);
const MotionTypography = motion(Typography);
const ButtonMotion = motion(Button);

const Cards = ({ item, useIn }) => {
  const navigate = useNavigate();
  const [openModel, setOpenModel] = useState(false);
  const handleClick = () => {
    navigate(`quize/${item.id}`);
  };

  const image = useIn === "ImageSection";
  const generateQuizWithAi = item?.primaryBtn?.text === "Generate Quiz";

  const handleOpenModel = () => {
    setOpenModel(true);
  };
  const handleCloseModel = () => {
    setOpenModel(false);
  };

  const renderCard = () => {
    switch (useIn) {
      case "heroSection":
        return (
          <CardContent
            component={motion.div}
            variants={staggerChildren}
            initial="hidden"
            animate="show"
          >
            <MotionTypography
              variants={fadeUp}
              variant="h2"
              sx={{
                fontSize: { xs: "1.8rem", md: "2.4rem" },
                fontWeight: 800,
                mb: 2,
              }}
            >
              {item.title}
            </MotionTypography>

            <MotionTypography
              variants={fadeUp}
              variant="body1"
              sx={{ mb: 3, color: "inherit" }}
            >
              {item.description}
            </MotionTypography>

            <BoxMotion
              variants={fadeUp}
              sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}
            >
              {item.primaryBtn && (
                <ButtonMotion
                  variants={fadeUp}
                  variant={item.primaryBtn.variant}
                  color="secondary"
                  size="large"
                  onClick={generateQuizWithAi ? handleOpenModel : null}
                >
                  {item.primaryBtn.text}
                </ButtonMotion>
              )}

              {item.secondaryBtn && (
                <ButtonMotion
                  variants={fadeUp}
                  variant={item.secondaryBtn.variant}
                  sx={{
                    color: "inherit",
                    borderColor: "rgba(255,255,255,0.3)",
                  }}
                  size="large"
                >
                  {item.secondaryBtn.text}
                </ButtonMotion>
              )}
            </BoxMotion>
          </CardContent>
        );
      case "ImageSection":
        return (
          <BoxMotion
            variants={staggerChildren}
            initial="hidden"
            animate="show"
            sx={{ position: "relative" }}
          >
            <BoxMotion
              component="img"
              src={item.image}
              alt={item.title}
              variants={fadeUp}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              sx={{
                width: "100%",
                objectFit: "cover",
                objectPosition: "center",
                height: 210,
                transition: "transform 0.3s ease",
                "&:hover": {
                  transform: "scale(1.05)",
                  filter: "brightness(90%)",
                },
              }}
            />
            <BoxMotion
              variants={fadeUp}
              sx={{
                ...flexAround,
                position: "absolute",
                bottom: 75,
                width: "100%",
              }}
            >
              <Typography
                sx={{ bgcolor: "text.primary", py: 1, px: 2, borderRadius: 2 }}
                variant="body2"
                color="primary.contrastText"
              >
                10 Qs
              </Typography>
              <Typography
                sx={{ bgcolor: "text.primary", py: 1, px: 2, borderRadius: 2 }}
                variant="body2"
                color="primary.contrastText"
              >
                7 Plays
              </Typography>
            </BoxMotion>
            <MotionTypography
              variants={fadeUp}
              sx={{ p: 1, ml: 2, color: "primary.contrastText" }}
              fontWeight={500}
            >
              {item.title}
            </MotionTypography>
          </BoxMotion>
        );
      default:
        return <Typography>Provide me where to use</Typography>;
    }
  };
  return (
    <>
      <CardMotion
        variants={
          useIn === "heroSection" ? heroCardVariants : imageCardVariants
        }
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        whileHover={useIn === "heroSection" ? { scale: 1.02 } : {}}
        whileTap={{ scale: 0.97 }}
        sx={{
          bgcolor: image ? "primary.dark" : "rgba(255,255,255,0.08)",
          p: { xs: image ? 0 : 2, sm: image ? 0 : 3, md: image ? 0 : 4 },
          borderRadius: image ? 1 : 3,
          color: "inherit",
          backdropFilter: "blur(4px)",
          cursor: "pointer",
          boxShadow: "none",
          minHeight: image ? 280 : null,
        }}
        onClick={image ? handleClick : null}
      >
        {renderCard()}
      </CardMotion>
      {openModel && (
        <QuizeModel
          handleClose={handleCloseModel}
          open={openModel}
          useIn="generateQuize"
        />
      )}
    </>
  );
};

export default Cards;
