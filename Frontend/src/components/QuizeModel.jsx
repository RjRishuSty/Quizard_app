import React, { useMemo } from "react";
import { Typography, Dialog, useMediaQuery } from "@mui/material";

import GenerateQuize from "./GenerateQuize";
import ShareData from "./ShareData";

const QuizeModel = ({ open, handleClose, quizId, quizTitle, useIn }) => {

const isMobile = useMediaQuery("(max-width:500px)");
  const RenderComponent = useMemo(() => {
    switch (useIn) {
      case "shareData":
        return (
          <ShareData
            quizId={quizId}
            quizTitle={quizTitle}
            handleClose={handleClose}
          />
        );
      case "generateQuize":
        return (
          <GenerateQuize
            handleClose={handleClose}
          />
        );
      default:
        return <Typography>Not Found — provide correct useIn</Typography>;
    }
  }, [useIn, quizId, quizTitle, handleClose]);

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      sx={{
        "& .MuiDialog-paper": {
          backgroundColor: "primary.dark",
          color: "white",
          borderRadius: 2,
          width: '100%',
          p:isMobile?1: 3,
        },
      }}
    >
      {RenderComponent}
    </Dialog>
  );
};

export default React.memo(QuizeModel);
