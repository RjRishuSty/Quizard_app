import { Box, FormControlLabel, Radio, Typography } from "@mui/material";

const AnswerOption = ({
  label,
  isSelected,
  onClick,
  status,
  correctIndex,
  optionIndex,
}) => {
  let borderColor = "#6A1B9A";

  if (status) {
    if (optionIndex === correctIndex) {
      borderColor = "green";
    } else if (isSelected && status === "wrong") {
      borderColor = "red";
    }
  }

  return (
    <Box
      onClick={onClick}
      sx={{
        width: "100%",
        mt: 2,
        background: "primary.light",
        borderRadius: 2,
        textAlign: "left",
        cursor: "pointer",
        border: `2px solid ${borderColor}`,
        boxShadow: isSelected ? "0 0 15px rgba(153, 51, 204, 0.8)" : "none",
        transition: "0.3s",
      }}
    >
      <FormControlLabel
        control={
          <Radio
            checked={isSelected}
            sx={{
              opacity: 0,
              position: "absolute",
            }}
          />
        }
        label={
          <Typography
            sx={{ color: "primary.contrastText", fontWeight: "normal", py: 2, pl: 3 }}
          >
            {label}
          </Typography>
        }
        sx={{ width: "100%", m: 0 }}
      />
    </Box>
  );
};

export default AnswerOption;
