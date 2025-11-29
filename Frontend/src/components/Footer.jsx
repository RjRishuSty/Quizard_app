import * as React from "react";
import {
  Box,
  Typography,
  Button,
  Stack,
  Link,
  useMediaQuery,
} from "@mui/material";
import {
  Language as LanguageIcon,
  Facebook as FacebookIcon,
  Instagram as InstagramIcon,
  LinkedIn as LinkedInIcon,
} from "@mui/icons-material";
import { X } from "@mui/icons-material";
import { flexBetween } from "../styles/flexStyles";

const Footer = () => {
  const isMobile = useMediaQuery("(max-width:500px)");
  const navLinks = [
    { label: "About Us", href: "#" },
    { label: "Contact Us", href: "#" },
    { label: "Privacy & Cookies Policy", href: "#" },
    { label: "Terms and Conditions", href: "#" },
    { label: "Disclaimer", href: "#" },
  ];

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "primary.main",
        width: "100%",
        padding: isMobile?"30px 10px": "30px 40px",
        ...flexBetween,
        flexWrap: "wrap",
        color: "inherit",
      }}
    >
      <Stack
        direction="column"
        spacing={2}
        alignItems="flex-start"
        sx={{ minWidth: 200, py: 1,order:{xs:2,sm:2,md:1} }}
      >
        <Button
          variant="contained"
          startIcon={<LanguageIcon />}
          sx={{
            backgroundColor: "white",
            color: "black",
            textTransform: "none",
            borderRadius: 2,
            fontWeight: "bold",
            "&:hover": {
              backgroundColor: "#e0e0e0",
            },
          }}
        >
          English
        </Button>
        <Typography variant="body2" sx={{ color: "white" }}>
          Quizzard © 2025. All rights reserved.
        </Typography>
      </Stack>

      <Stack
        direction="column"
        spacing={2}
        alignItems={isMobile?"flex-start":"flex-end"}
        sx={{ flexGrow: 1, textAlign: "right", py: 1,order:{xs:1,sm:1,md:2} }}
      >
        <Stack
          direction="row"
          spacing={isMobile?1:3}
          justifyContent={isMobile?"flex-start":"flex-end"}
          alignItems={isMobile?"flex-start":"flex-end"}
          sx={{ flexWrap: "wrap",gap:isMobile?1:null}}
        >
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              underline="hover"
              variant="body2"
              sx={{ color: "white", fontWeight: "bold",mt:isMobile?1:2 }}
            >
              {link.label}
            </Link>
          ))}
        </Stack>

        <Stack direction="row" spacing={1.5} sx={{ mt: 2 }}>
          <Link href="#" target="_blank" color="inherit">
            <FacebookIcon fontSize="medium" sx={{ color: "white" }} />
          </Link>
          <Link href="#" target="_blank" color="inherit">
            <InstagramIcon fontSize="medium" sx={{ color: "white" }} />
          </Link>
          <Link href="#" target="_blank" color="inherit">
            <LinkedInIcon fontSize="medium" sx={{ color: "white" }} />
          </Link>
          <Link href="#" target="_blank" color="inherit">
            <X fontSize="medium" sx={{ color: "white" }} /> {/* The 'X' icon */}
          </Link>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Footer;
