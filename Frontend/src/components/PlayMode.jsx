import { Button, Stack, Typography } from "@mui/material";
import React from "react";

const PlayMode = ({handleClose,quizId}) => {
  return (
    <Stack spacing={2} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ fontWeight: 700 }}>
        Choose Play Mode
      </Typography>
      <Button
        variant="contained"
        color="secondary"
        size="large"
        onClick={() => {
          handleClose();
          console.log("Normal Mode Selected for quizId:", quizId);
          // navigate to normal mode page or start quiz normally
        }}
      >
        Normal Mode
      </Button>
      <Button
        variant="contained"
        color="secondary"
        size="large"
        onClick={() => {
          handleClose();
          console.log("Full Screen Mode Selected for quizId:", quizId);
          // navigate to full screen mode page or start quiz full screen
        }}
      >
        Full Screen Mode
      </Button>
    </Stack>
  );
};

export default PlayMode;
