import { Box, Typography, Button } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { flexBetween } from "../styles/flexStyles";
import Cards from "./Cards";

const QuizSlider = ({ title, data }) => {


  return (
    <Box sx={{ position: "relative", mb: 5 }}>
      <Box
        sx={{
          ...flexBetween,
          mb: 1,
        }}
      >
        <Typography variant="h5" fontWeight={900}>
          {title}
        </Typography>
        <Button variant="text">See All</Button>
      </Box>

      <Swiper
        modules={[Navigation, Autoplay]}
        navigation={true}
        autoplay={{ delay: 9000, disableOnInteraction: false }}
        slidesPerView={4}
        spaceBetween={20}
        loop={true}
        breakpoints={{
          0: { slidesPerView: 1 },       // Mobile
          600: { slidesPerView: 2 },     // Tablet
          900: { slidesPerView: 3 },     // Small desktop
          1200: { slidesPerView: 4 },    // Large desktop
        }}
      >
        {data.map((item, index) => (
          <SwiperSlide key={index}>
            <Cards useIn="ImageSection" item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default QuizSlider;
