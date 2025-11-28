import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AppLayout from "./layouts/AppLayout";

const App = () => {
  const router = createBrowserRouter([
    {
      Path: "/",
      element: <AppLayout />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          index: true,
          element: "",
        },
        {
          index: true,
          element: "",
        },
        {
          index: true,
          element: "",
        },
        {
          index: true,
          element: "",
        },
        {
          index: true,
          element: "",
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
