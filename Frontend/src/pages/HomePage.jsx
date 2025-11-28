import React from "react";
import HeroSection from "../components/HeroSection";
import SearchBox from "../components/SearchBox";
import { Box } from "@mui/material";
import QuizSwiper from "../components/QuizSwiper";
import { quizeData } from "../objects/quizeData";

const HomePage = () => {
  const personalityQuizzes = quizeData.filter(
    (item) => item.type === "personality"
  );

  const trendingQuizzes = quizeData.filter((item) => item.type === "trending");

  return (
    <Box>
      <HeroSection />
      <Box sx={{ px: 3 }}>
        <QuizSwiper title="Personality Quizzes" data={personalityQuizzes}  type="personality" />
        <QuizSwiper title="Trending Quizzes" data={trendingQuizzes}  type="trending"/>
      </Box>
    </Box>
  );
};

export default HomePage;
