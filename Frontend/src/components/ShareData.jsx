import {
  Box,
  Typography,
  Button,
  DialogTitle,
  DialogContent,
  IconButton,
  TextField,
  InputAdornment,
  Stack,
  Snackbar,
} from "@mui/material";
import React, { useCallback, useMemo, useState } from "react";
import {
  Close as CloseIcon,
  ContentCopy as ContentCopyIcon,
} from "@mui/icons-material";
import { flexBetween } from "../styles/flexStyles";
import { socialMedia } from "../objects/socialMedia";

const ShareData = ({ quizId, quizTitle, handleClose }) => {
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const quizLink = useMemo(
    () => `https://quize-app-snowy.vercel.app/quize/${quizId}`,
    [quizId]
  );

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(quizLink);
    setSnackbarOpen(true);
  }, [quizLink]);

  const handleShare = useCallback(
    (social) => {
      const encoded = encodeURIComponent(quizLink);
      let shareUrl = social.url + encoded;

      if (social.name === "X") {
        shareUrl += `&text=Try the ${encodeURIComponent(quizTitle)}!`;
      }
      if (social.name === "WhatsApp") {
        shareUrl =
          social.url +
          encodeURIComponent(`Try this quiz: ${quizTitle} → ${quizLink}`);
      }

      if (social.name !== "Instagram") {
        window.open(shareUrl, "_blank");
      } else {
        alert("Instagram does not support direct link sharing.");
      }
    },
    [quizLink, quizTitle]
  );

  return (
    <>
      <DialogTitle sx={{ p: 2, ...flexBetween }}>
        <Box>
          <Typography variant="h5" fontWeight="bold">
            Share Quiz
          </Typography>
          <Typography variant="body2" sx={{ color: "#ccc" }}>
            Share this quiz with your friends!
          </Typography>
        </Box>

        <IconButton onClick={handleClose} sx={{ color: "white" }}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <DialogContent sx={{ p: 2 }}>
        <Box
          sx={{
            backgroundColor: "#4c2e8c",
            p: 1.5,
            borderRadius: 1,
            mb: 3,
          }}
        >
          <Typography fontWeight="bold">{quizTitle}</Typography>
        </Box>

        <Typography variant="body2" sx={{ mb: 1, color: "#ccc" }}>
          Share Link
        </Typography>

        <TextField
          fullWidth
          value={quizLink}
          readOnly
          size="small"
          sx={{
            "& .MuiOutlinedInput-root": {
              backgroundColor: "#33204a",
              color: "white",
              "& fieldset": { borderColor: "#4c2e8c" },
              "&:hover fieldset": { borderColor: "#9933cc" },
            },
          }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton sx={{ color: "#9933cc" }} onClick={handleCopy}>
                  <ContentCopyIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />

        <Typography variant="body2" sx={{ mt: 3, mb: 2, color: "#ccc" }}>
          Share on Social Media
        </Typography>

        <Stack direction="row" spacing={1.5} sx={{ ...flexBetween, pb: 3 }}>
          {socialMedia.map((s) => (
            <IconButton
              key={s.name}
              onClick={() => handleShare(s)}
              sx={{
                backgroundColor: s.color,
                color: "white",
                width: 44,
                height: 44,
                "&:hover": { opacity: 0.8, backgroundColor: s.color },
              }}
            >
              {s.icon}
            </IconButton>
          ))}
        </Stack>
      </DialogContent>

      <Box sx={{ p: 2, textAlign: "right" }}>
        <Button
          onClick={handleClose}
          variant="contained"
          sx={{
            backgroundColor: "#9933cc",
            "&:hover": { backgroundColor: "#7a29a3" },
          }}
        >
          Close
        </Button>
      </Box>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={2000}
        onClose={() => setSnackbarOpen(false)}
        message="Link copied!"
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      />
    </>
  );
};

export default React.memo(ShareData);
