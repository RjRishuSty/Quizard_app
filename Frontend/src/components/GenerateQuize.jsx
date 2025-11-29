import React, { useState, useCallback } from "react";
import {
  Box,
  Button,
  DialogContent,
  DialogTitle,
  FormControl,
  Grid,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { flexBetween } from "../styles/flexStyles";
import { quizFormFields } from "../objects/generateQuizFormFields";
import { useNavigate } from "react-router-dom";

const GenerateQuize = ({ handleClose }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    quizName: "",
    numQuestions: 10,
    quizType: "",
    sourceType: "",
    sourceValue: "",
  });

  const handleChange = useCallback((id, value) => {
    setFormData((prev) => ({ ...prev, [id]: value }));
  }, []);

  const handleGenerateQuiz = useCallback(() => {
    navigate("/generate-quize", { data: formData });
  }, [formData, navigate]);

  console.log("Formdata", formData);
  return (
    <>
      <DialogTitle sx={{ p: 2, ...flexBetween }}>
        <Typography component="span" variant="h5" fontWeight="bold">
          Generate Quiz
        </Typography>
        <IconButton onClick={handleClose} sx={{ color: "white" }}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <DialogContent sx={{ p: 2 }}>
        <Grid container spacing={2}>
          {quizFormFields.map((field) => {
            const quesNum = field.type === "number";
            const selectType = field.type === "select";
            return (
              <Grid
                key={field.id}
                size={{ xs: 12, sm: 12, md: quesNum || selectType ? 4 : 12 }}
              >
                <Typography variant="body2" sx={{ mb: 0.5, color: "#ccc" }}>
                  {field.label}
                </Typography>

                {field.type === "text" || field.type === "number" ? (
                  <TextField
                    fullWidth
                    size="small"
                    type={field.type}
                    placeholder={field.placeholder}
                    value={formData[field.id]}
                    onChange={(e) => handleChange(field.id, e.target.value)}
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        backgroundColor: "#33204a",
                        color: "white",
                        "& fieldset": { borderColor: "#4c2e8c" },
                        "&:hover fieldset": { borderColor: "#9933cc" },
                      },
                    }}
                  />
                ) : (
                  <FormControl fullWidth size="small">
                    <Select
                      labelId={`${field.id}-label`}
                      id={field.id}
                      value={formData[field.id]}
                      onChange={(e) => handleChange(field.id, e.target.value)}
                      sx={{
                        backgroundColor: "#33204a",
                        color: "white",
                        borderRadius: 1,
                        "& .MuiOutlinedInput-notchedOutline": {
                          borderColor: "#4c2e8c",
                        },
                        "&:hover .MuiOutlinedInput-notchedOutline": {
                          borderColor: "#9933cc",
                        },
                      }}
                      MenuProps={{
                        PaperProps: {
                          sx: {
                            bgcolor: "#000",
                            color: "#fff",
                            borderRadius: 0.5,
                          },
                        },
                      }}
                    >
                      {field.options?.map((opt) => (
                        <MenuItem
                          key={opt.value}
                          value={opt.value}
                          sx={{
                            "&.Mui-selected": { backgroundColor: "#4c2e8c" },
                            "&.Mui-selected:hover": {
                              backgroundColor: "#9933cc",
                            },
                            "&:hover": { backgroundColor: "#33204a" },
                          }}
                        >
                          {opt.label}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                )}
              </Grid>
            );
          })}

          {(formData.sourceType === "url" || formData.sourceType === "pdf") && (
            <Grid size={{ xs: 12, sm: 12, md: 12 }}>
              <Typography variant="body2" sx={{ mb: 0.5, color: "#ccc" }}>
                {formData.sourceType === "url" ? "Enter URL" : "Upload PDF"}
              </Typography>
              {formData.sourceType === "url" ? (
                <TextField
                  fullWidth
                  size="small"
                  placeholder="Enter URL"
                  value={formData.sourceValue}
                  onChange={(e) => handleChange("sourceValue", e.target.value)}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      backgroundColor: "#33204a",
                      color: "white",
                      "& fieldset": { borderColor: "#4c2e8c" },
                      "&:hover fieldset": { borderColor: "#9933cc" },
                    },
                  }}
                />
              ) : (
                <input
                  type="file"
                  accept="application/pdf"
                  onChange={(e) =>
                    handleChange("sourceValue", e.target.files[0])
                  }
                  style={{ color: "white" }}
                />
              )}
            </Grid>
          )}
        </Grid>
      </DialogContent>

      <Box sx={{ p: 2, textAlign: "right" }}>
        <Button
          onClick={handleGenerateQuiz}
          variant="contained"
          sx={{
            backgroundColor: "#9933cc",
            mr: 1,
            "&:hover": { backgroundColor: "#7a29a3" },
          }}
        >
          Generate
        </Button>

        <Button
          onClick={handleClose}
          variant="outlined"
          sx={{
            color: "#ccc",
            borderColor: "#4c2e8c",
            "&:hover": { borderColor: "#9933cc", color: "white" },
          }}
        >
          Cancel
        </Button>
      </Box>
    </>
  );
};

export default GenerateQuize;
