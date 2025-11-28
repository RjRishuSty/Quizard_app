import React from "react";
import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

const AppLayout = () => {
  return (
    <>
      <Header />
      <Box component="main" sx={{position:'relative',mt:7}}>
        <Outlet />
      </Box>
      <Footer />
    </>
  );
};

export default AppLayout;
