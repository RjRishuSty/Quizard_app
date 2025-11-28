import {
  Box,
  Typography,
  Button,
  IconButton,
  useMediaQuery,
} from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { flexBetween } from "../styles/flexStyles";
import Cards from "./Cards";
import { useRef } from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useNavigate } from "react-router-dom";

const QuizSlider = ({ title, data, type }) => {
  const swiperRef = useRef(null);
  const navigate = useNavigate();
  const isMobile = useMediaQuery("(max-width:550px)");

  const handleSeeAll = () => {
    navigate(`/${type}`);
  };
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
        <Box>
          {!isMobile && (
            <>
              <IconButton
                size="small"
                sx={{
                  bgcolor: "primary.dark",
                  color: "#fff",
                  mr: 2,
                  "&:hover": { bgcolor: "primary.main" },
                }}
                onClick={() => swiperRef.current?.slidePrev()}
              >
                <ArrowBackIosIcon fontSize="small" />
              </IconButton>
              <IconButton
                size="small"
                sx={{
                  bgcolor: "primary.dark",
                  color: "#fff",
                  mr: 2,
                  "&:hover": { bgcolor: "primary.main" },
                }}
                onClick={() => swiperRef.current?.slideNext()}
              >
                <ArrowForwardIosIcon fontSize="small" />
              </IconButton>
            </>
          )}
          <Button variant="text" onClick={handleSeeAll}>
            See All
          </Button>
        </Box>
      </Box>

      <Swiper
        modules={[Autoplay]}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        autoplay={{ delay: 9000, disableOnInteraction: false }}
        slidesPerView={4}
        spaceBetween={20}
        loop={true}
        breakpoints={{
          0: { slidesPerView: 1 }, // Mobile
          600: { slidesPerView: 2 }, // Tablet
          900: { slidesPerView: 3 }, // Small desktop
          1200: { slidesPerView: 4 }, // Large desktop
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
