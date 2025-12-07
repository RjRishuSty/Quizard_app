import React, { useCallback, useMemo, useState } from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Button,
  Typography,
  useMediaQuery,
  IconButton,
  Drawer,
} from "@mui/material";
import Logo from "./Logo";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";
import { flexBetween } from "../styles/flexStyles";
import { menuLinks } from "../objects/menuLinks";
import MenuIcon from "@mui/icons-material/Menu";
import Sidebar from "./Sidebar";
import { motion } from "framer-motion";
import {
  headerVariants,
  logoVariants,
  navContainerVariants,
  navItemVariants,
} from "../animations/headerAnimations";

const AppBarMotion = motion(AppBar);
const BoxMotion = motion(Box);

const Header = () => {
  const [open, setOpen] = useState(false);
  const miniLaptop = useMediaQuery("(max-width:1110px)");
  const smallDevice = useMediaQuery("(max-width:899px)");

  const filteredMenu = useMemo(
    () =>
      menuLinks.filter(
        (item) => item.label !== "Login" && item.label !== "Register"
      ),
    []
  );

  const toggleDrawer = useCallback((state) => () => setOpen(state), []);
  const handleToggleSidebar = useCallback(() => {
    setOpen((prev) => !prev);
  }, []);
  return (
    <AppBarMotion
      position="fixed"
      elevation={0}
      variants={headerVariants}
      initial="hidden"
      animate="show"
      sx={{ backgroundColor: "primary.main" }}
    >
      <Toolbar sx={{ ...flexBetween }}>
        <motion.div variants={logoVariants}>
          <Logo />
        </motion.div>
        <BoxMotion
          variants={navContainerVariants}
          initial="hidden"
          animate="show"
          sx={{
            display: { xs: "none", md: "flex" },
            gap: miniLaptop ? 0 : 2,
          }}
        >
          {(miniLaptop ? menuLinks : filteredMenu).map((item, index) => (
            <motion.div
              key={index}
              variants={navItemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                component={Link}
                to={item.path}
                color="inherit"
                sx={{ fontWeight: 500, letterSpacing: 1 }}
              >
                {item.label}
              </Button>
            </motion.div>
          ))}
        </BoxMotion>

        {miniLaptop ? null : (
          <Box sx={{ display: "flex", gap: 2 }}>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                component={Link}
                to="/login"
                variant="text"
                color="inherit"
              >
                Login
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                component={Link}
                to="/register"
                variant="contained"
                color="secondary"
              >
                Register
              </Button>
            </motion.div>
          </Box>
        )}

        {smallDevice && (
          <motion.div
            whileTap={{ scale: 0.8 }}
            animate={{ rotate: open ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <IconButton
              sx={{ border: "1px solid #fff" }}
              onClick={handleToggleSidebar}
            >
              {open ? (
                <CloseIcon sx={{ color: "primary.contrastText" }} />
              ) : (
                <MenuIcon sx={{ color: "primary.contrastText" }} />
              )}
            </IconButton>
          </motion.div>
        )}

        {smallDevice && (
          <Drawer
            anchor="left"
            open={open}
            onClose={toggleDrawer(false)}
            ModalProps={{
              BackdropProps: { invisible: true },
            }}
          >
            <Sidebar closeDrawer={toggleDrawer(false)} />
          </Drawer>
        )}
      </Toolbar>
    </AppBarMotion>
  );
};

export default Header;
