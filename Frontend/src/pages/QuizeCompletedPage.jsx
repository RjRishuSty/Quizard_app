import React, { useState } from "react";
import {
  Box,
  Button,
  Typography,
  Stack,
  Container,
  useMediaQuery,
} from "@mui/material";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { flexAround, flexCenter } from "../styles/flexStyles";
import ShareIcon from "@mui/icons-material/Share";
import ReplayIcon from "@mui/icons-material/Replay";
import QuizeModel from "../components/QuizeModel";

const QuizeCompletedPage = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const { id } = useParams();

  const [openModel, setOpenModel] = useState(false);
  const isMobile = useMediaQuery("(max-width:500px)");

  const handleOpenShareModel = () => {
    setOpenModel(true);
  };
  const handleCloseShareModel = () => {
    setOpenModel(false);
  };

  const score = state?.score || 0;
  const total = state?.total || 10;
  const percentage = Math.round((score / total) * 100);

  return (
    <Box
      sx={{
        minHeight:isMobile?"90vh": "100vh",
        bgcolor: "primary.dark",
        color: "white",
        ...flexCenter,
      }}
    >
      <Container
        sx={{
          ...flexCenter,
          flexDirection: "column",
        }}
      >
        <Typography
          variant={isMobile ? "h3" : "h2"}
          fontWeight="bold"
          gutterBottom
        >
          🎉 Quiz Completed!
        </Typography>
        <Box
          sx={{
            mt: 4,
            p: 3,
            bgcolor: "#2e1a4b",
            borderRadius: 3,
            maxWidth: 600,
            mx: "auto",
          }}
        >
          <Typography
            variant={isMobile ? "h5" : "h4"}
            sx={{ color: "#C084FC", fontWeight: "bold" }}
          >
            🧠 Growth Mindset
          </Typography>

          <Typography mt={2} sx={{ opacity: 0.9 }}>
            You believe skills can be developed. Challenges excite you, mistakes
            are stepping stones, and you never stop learning. Your energy
            inspires people around you.
          </Typography>

          <Typography
            variant="body1"
            mt={2}
            color="primary.dark"
            sx={{
              fontWeight: "bold",
              borderRadius: 1,
              bgcolor: "#ccc",
              p: 1,
              px: 2,
            }}
          >
            Total Score: {score} / {total}
          </Typography>
          <Typography
            variant="body1"
            mt={1}
            color="primary.dark"
            sx={{
              fontWeight: "bold",
              borderRadius: 1,
              bgcolor: "#ccc",
              p: 1,
              px: 2,
            }}
          >
            Percentage: {percentage}%
          </Typography>
          <Stack sx={{ mt: 5, ...flexAround, flexDirection: "row", gap: 5 }}>
            <Button
              variant="contained"
              color="secondary"
              size={isMobile ? "small" : "medium"}
              onClick={() => navigate(`/quize/play/${id}`)}
              startIcon={<ReplayIcon />}
            >
              Retake Quiz
            </Button>

            <Button
              variant="outlined"
              size={isMobile ? "small" : "medium"}
              startIcon={<ShareIcon />}
              sx={{ color: "white", borderColor: "white" }}
              onClick={handleOpenShareModel}
            >
              Share Results
            </Button>
          </Stack>
          {openModel && (
            <QuizeModel   
              handleClose={handleCloseShareModel}
              open={openModel}
              quizId={id}
              quizTitle='Quize Result'
              useIn='shareData'
            />
          )}
        </Box>
      </Container>
    </Box>
  );
};

export default QuizeCompletedPage;
