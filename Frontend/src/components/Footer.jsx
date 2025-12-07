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
import { motion } from "framer-motion";
import {
  fadeItem,
  footerVariants,
  staggerContainer,
} from "../animations/footerAnimations";

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
      component={motion.footer}
      variants={footerVariants}
      initial="hidden"
      animate="show"
      sx={{
        backgroundColor: "primary.main",
        width: "100%",
        padding: isMobile ? "30px 10px" : "30px 40px",
        ...flexBetween,
        flexWrap: "wrap",
        color: "inherit",
      }}
    >
      <Stack
        component={motion.div}
        variants={staggerContainer}
        direction="column"
        spacing={2}
        alignItems="flex-start"
        sx={{ minWidth: 200, py: 1, order: { xs: 2, sm: 2, md: 1 } }}
      >
        <motion.div variants={fadeItem}>
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
        </motion.div>
        <motion.div variants={fadeItem}>
          <Typography variant="body2" sx={{ color: "white" }}>
            Quizzard © 2025. All rights reserved.
          </Typography>
        </motion.div>
      </Stack>

      <Stack
        component={motion.div}
        variants={staggerContainer}
        direction="column"
        spacing={2}
        alignItems={isMobile ? "flex-start" : "flex-end"}
        sx={{
          flexGrow: 1,
          textAlign: "right",
          py: 1,
          order: { xs: 1, sm: 1, md: 2 },
        }}
      >
        <Stack
          component={motion.div}
          variants={staggerContainer}
          direction="row"
          spacing={isMobile ? 1 : 3}
          justifyContent={isMobile ? "flex-start" : "flex-end"}
          alignItems={isMobile ? "flex-start" : "flex-end"}
          sx={{ flexWrap: "wrap", gap: isMobile ? 1 : null }}
        >
          {navLinks.map((link) => (
            <motion.div
              key={link.label}
              variants={fadeItem}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                key={link.label}
                href={link.href}
                underline="hover"
                variant="body2"
                sx={{
                  color: "white",
                  fontWeight: "bold",
                  mt: isMobile ? 1 : 2,
                }}
              >
                {link.label}
              </Link>
            </motion.div>
          ))}
        </Stack>

        <Stack direction="row" spacing={1.5} sx={{ mt: 2 }}>
          {[FacebookIcon, InstagramIcon, LinkedInIcon, X].map((Icon, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <Link href="#" target="_blank" color="inherit">
                <Icon fontSize="medium" sx={{ color: "white" }} />
              </Link>
            </motion.div>
          ))}
        </Stack>
      </Stack>
    </Box>
  );
};

export default Footer;
