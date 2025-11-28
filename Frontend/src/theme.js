import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#6A1B9A", // Purple
      light: "#9C4DCC",
      dark: "#38006B",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#FFB300", // Yellow
      light: "#FFE54C",
      dark: "#C68400",
      contrastText: "#000000",
    },
    background: {
      default: "#F8F8FF",
      paper: "#ffffff",
    },
    text: {
      primary: "#1A1A1A",
      secondary: "#666666",
    },
  },

  typography: {
    fontFamily: `"Poppins", "Roboto", "Helvetica", "Arial", sans-serif`,
    h1: { fontWeight: 700, fontSize: "3rem" },
    h2: { fontWeight: 700, fontSize: "2.4rem" },
    h3: { fontWeight: 600, fontSize: "1.8rem" },
    body1: { fontSize: "1rem", lineHeight: 1.6 },
    button: { textTransform: "none", fontWeight: 600 },
  },

  shape: {
    borderRadius: 10,
  },

  spacing: 8,

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 10,
          // padding: "10px 22px",
          fontWeight: 600,
          letterSpacing: 0.5,
        },
      },
    },
  },
});

export default theme;
