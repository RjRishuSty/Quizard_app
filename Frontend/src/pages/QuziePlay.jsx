import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Stack,
  CircularProgress,
  useMediaQuery,
} from "@mui/material";
import { useParams, useNavigate } from "react-router-dom";
import QuizProgressBar from "../components/QuizProgressBar";
import AnswerOption from "../components/AnswerOption";
import { quizeData } from "../objects/quizeData";
import { flexCenter } from "../styles/flexStyles";

const QuizePlay = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const laptop = useMediaQuery("(max-width:1155px)");

  const filterData = quizeData.find((item) => item.id === Number(id));

  const questions = filterData.allQuestion;
  const totalQuestions = questions.length;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAns, setSelectedAns] = useState(null);
  const [answerStatus, setAnswerStatus] = useState(null);
  const [timeLeft, setTimeLeft] = useState(50);
  const [correctCount, setCorrectCount] = useState(0);
  const [loading, setLoading] = useState(false);

  const currentQ = questions[currentIndex];

  //* Timer ------------------
  useEffect(() => {
    if (selectedAns !== null) return;
    if (timeLeft === 0) {
      // eslint-disable-next-line react-hooks/immutability
      goToNextQuestion();
      return;
    }

    const timer = setTimeout(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft, selectedAns]);

  //* Handle Answer ------------------
  const handleAnswer = (option, index) => {
    if (selectedAns !== null) return;

    setSelectedAns(option);

    const isCorrect = index + 1 === currentQ.answer;
    setAnswerStatus(isCorrect ? "correct" : "wrong");

    if (isCorrect) {
      setCorrectCount((prev) => prev + 1);
    }

    setTimeout(() => {
      goToNextQuestion();
    }, 1200);
  };

  //* Next Question or Finesh ------------------
  const goToNextQuestion = () => {
    const isLast = currentIndex + 1 === totalQuestions;

    if (isLast) {
      setLoading(true);

      setTimeout(() => {
        navigate(`/quize/completed/${filterData.id}`, {
          state: {
            score: correctCount,
            total: totalQuestions,
          },
        });
      }, 1000);

      return;
    }

    setCurrentIndex((prev) => prev + 1);
    setSelectedAns(null);
    setAnswerStatus(null);
    setTimeLeft(50);
  };

  if (loading) {
    return (
      <Box sx={{ ...flexCenter, minHeight: "100vh", bgcolor: "primary.dark" }}>
        <CircularProgress color="secondary" size={60} />
      </Box>
    );
  }

  return (
    <Box
      sx={{ bgcolor: "primary.contrastText", minHeight: "90vh", ...flexCenter }}
    >
      <Box
        sx={{
          bgcolor: "primary.dark",
          borderRadius: 2,
          px: { xs: 2, sm: 4, md: 5 },
          py: 5,
          width: { xs: "98%", sm: "95%", md: laptop ? "80%" : "60%" },
        }}
      >
        <QuizProgressBar
          totalQuestions={totalQuestions}
          currentQuestion={currentIndex + 1}
        />

        <Typography
          gutterBottom
          variant="body1"
          sx={{ color: "primary.contrastText" }}
        >
          Time Left:{" "}
          <Typography
            component="span"
            variant="body1"
            sx={{ color: "secondary.main" }}
          >
            {timeLeft}
          </Typography>
          s
        </Typography>

        <Typography
          variant="h6"
          sx={{
            fontWeight: "bold",
            mb: 2,
            color: "primary.contrastText",
            textAlign: "left",
          }}
        >
          {currentQ.question}
        </Typography>

        <Stack spacing={1}>
          {currentQ.options.map((opt, i) => (
            <AnswerOption
              key={i}
              label={opt}
              isSelected={selectedAns === opt}
              status={answerStatus}
              correctIndex={currentQ.answer}
              optionIndex={i + 1}
              onClick={() => handleAnswer(opt, i)}
            />
          ))}
        </Stack>
      </Box>
    </Box>
  );
};

export default QuizePlay;
