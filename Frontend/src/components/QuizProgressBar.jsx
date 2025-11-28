import React from "react";
import { CheckCircle } from "@mui/icons-material";
import { Box, Stack, Typography } from "@mui/material";
import { flexCenter } from "../styles/flexStyles";

const QuizProgressBar = ({ totalQuestions, currentQuestion }) => {
  return (
    <Stack
      sx={{
        ...flexCenter,
        flexDirection: "row",
        width: "100%",
        mb: 4,
      }}
    >
      {Array.from({ length: totalQuestions }, (_, index) => index + 1).map(
        (number) => {
          const isCompleted = number < currentQuestion;
          const isCurrent = number === currentQuestion;

          const circleStyle = {
            width: { xs: 25, sm: 25, md: 32 },
            height: { xs: 25, sm: 25, md: 32 },
            borderRadius: "50%",
            ...flexCenter,
            fontWeight: { xs: "normal", sm: "normal", md: "bold" },
            color: isCurrent ? "#fff" : isCompleted ? "#fff" : "#999",
            backgroundColor: isCurrent
              ? "transparent"
              : isCompleted
              ? "green"
              : "transparent",
            border: `2px solid ${
              isCurrent ? "#fff" : isCompleted ? "green" : "#999"
            }`,
          };

          const connectorStyle = {
            flexGrow: 1,
            height: 2,
            backgroundColor: isCurrent
              ? "#ccc"
              : isCompleted
              ? "green"
              : "#999",
            visibility: number < totalQuestions ? "visible" : "hidden",
          };

          return (
            <React.Fragment key={number}>
              <Box sx={circleStyle}>
                {isCompleted ? (
                  <CheckCircle sx={{ fontSize: { xs: 15, sm: 15, md: 20 } }} />
                ) : (
                  <Typography variant="caption">{number}</Typography>
                )}
              </Box>
              <Box sx={connectorStyle} />
            </React.Fragment>
          );
        }
      )}
    </Stack>
  );
};

export default QuizProgressBar;
