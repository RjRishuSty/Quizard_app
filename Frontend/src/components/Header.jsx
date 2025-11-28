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
    <AppBar
      position="fixed"
      elevation={0}
      sx={{ backgroundColor: "primary.main" }}
    >
      <Toolbar sx={{ ...flexBetween }}>
        <Logo />
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            gap: miniLaptop ? 0 : 2,
          }}
        >
          {(miniLaptop ? menuLinks : filteredMenu).map((item, index) => (
            <Button
              component={Link}
              to={item.path}
              key={index}
              color="inherit"
              sx={{
                fontWeight: 500,
                letterSpacing: 1,
              }}
            >
              {item.label}
            </Button>
          ))}
        </Box>

        {miniLaptop ? null : (
          <Box sx={{ display: "flex", gap: 2 }}>
            <Button
              component={Link}
              to="/login"
              variant="text"
              color="inherit"
              size="large"
            >
              Login
            </Button>
            <Button
              component={Link}
              to="/register"
              variant="contained"
              color="secondary"
              size="large"
            >
              Register
            </Button>
          </Box>
        )}

        {smallDevice && (
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
    </AppBar>
  );
};

export default Header;
