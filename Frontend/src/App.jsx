import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AppLayout from "./layouts/AppLayout";
import QuizePage from "./pages/QuizePage";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          path: "quize/:id",
          element: <QuizePage />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
