import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { quizeData } from "../objects/quizeData";
import { flexCenter } from "../styles/flexStyles";

const QuizePage = () => {
  const { id } = useParams();
  const filterData = quizeData.find((item) => item.id === Number(id));

  if (!filterData) return <Typography>Quiz not found!</Typography>;
  return (
    <Stack sx={{ minHeight: "90vh", ...flexCenter }}>
      <Container
        sx={{
          py: 10,
          bgcolor: "primary.light",
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
                height: { xs: 200, sm: 350, md: 350 },
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
            sx={{
              py: 3,
            }}
          >
            <Typography
              gutterBottom
              variant={"h4"}
              sx={{ color: "primary.contrastText", fontWeight: 900 }}
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
                {" "}
                {filterData.questions}
              </Typography>{" "}
              Questions
            </Typography>
            <Box sx={{ mt: 2 }}>
              {filterData.btn.map((item) => (
                <Button
                  startIcon={item.icon}
                  variant="contained"
                  color="secondary"
                  size="large"
                  sx={{ m: 1 }}
                >
                  {item.label}
                </Button>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Stack>
  );
};

export default QuizePage;
