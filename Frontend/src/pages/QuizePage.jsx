import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { quizeData } from "../objects/quizeData";
import { flexCenter } from "../styles/flexStyles";
import { useState } from "react";
import QuizeModel from "../components/QuizeModel";

const QuizePage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [openModel, setOpenModel] = useState(false);
  const filterData = quizeData.find((item) => item.id === Number(id));
  const handlePlayQuize = () => {
    navigate(`/quize/play/${filterData.id}`);
  };

  const handleOpenShareModel = () => {
    setOpenModel(true);
  };
  const handleCloseShareModel = () => {
    setOpenModel(false);
  };

  if (!filterData) return <Typography>Quiz not found!</Typography>;
  return (
    <Stack sx={{ minHeight: "90vh", ...flexCenter,bgcolor:'primary.dark' }}>
      <Container
        sx={{
          py: 5,
          borderRadius: { xs: 0, sm: 0, md: 1 },
        }}
      >
        <Grid container rowSpacing={2} columnSpacing={4}>
          <Grid size={{ xs: 12, sm: 12, md: 5 }}>
            <Box
              component="img"
              src={filterData.image}
              alt={filterData.title}
              sx={{
                width: "100%",
                height: { xs: 250, sm: 350, md: 350 },
                objectPosition: "center",
                objectFit: "cover",
                borderRadius: 2,
                filter: "brightness(90%)",
                transition: "transform 0.3s ease",
                cursor: "pointer",
                "&:hover": {
                  filter: "brightness(110%)",
                  transform: "scale(1.05)",
                },
              }}
            />
          </Grid>
          <Grid
            size={{ xs: 12, sm: 12, md: 7 }}
          >
            <Typography
              gutterBottom
              sx={{ color: "primary.contrastText", fontWeight: 800 ,fontSize:{xs:'1.5rem',sm:'1.9rem',md:'2.5rem'}}}
            >
              {filterData.title}
            </Typography>
            <Typography
              variant="h6"
              gutterBottom
              sx={{
                color: "primary.contrastText",
                fontWeight: 600,
                textTransform: "uppercase",
              }}
            >
              <Typography
                component="span"
                variant="h6"
                sx={{
                  color: "secondary.main",
                  fontWeight: 800,
                  textAlign: "start",
                }}
              >
                {filterData.questions}
              </Typography>{" "}
              Questions
            </Typography>
            <Box sx={{ mt: 2 }}>
              {filterData.btn.map((item) => {
                const playBtn = item.label === "Play";
                const shareBtn = item.label === "Play With Friends";
                return (
                  <Button
                    key={item.label}
                    startIcon={item.icon}
                    variant="contained"
                    color="secondary"
                    size="large"
                    sx={{ m: 1 }}
                    onClick={
                      playBtn
                        ? handlePlayQuize
                        : shareBtn
                        ? handleOpenShareModel
                        : null
                    }
                  >
                    {item.label}
                  </Button>
                );
              })}
            </Box>
            {openModel && (
              <QuizeModel
                handleClose={handleCloseShareModel}
                open={openModel}
                quizId={filterData.id}
                quizTitle={filterData.title}
                useIn='shareData'
              />
            )}
          </Grid>
        </Grid>
      </Container>
    </Stack>
  );
};

export default QuizePage;
