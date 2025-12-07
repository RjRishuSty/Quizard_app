import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AppLayout from "./layouts/AppLayout";
import QuizePage from "./pages/QuizePage";
import QuizePlay from "./pages/QuziePlay";
import QuizeCompletedPage from "./pages/QuizeCompletedPage";
import ShowAllQuize from "./pages/ShowAllQuize";
import GenerateQuizePage from "./pages/GenerateQuizePage";

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
          path: 'generate-quize',
          element: <GenerateQuizePage />,
        },
        { 
          path: "quizes/:label",
          element: <ShowAllQuize />,
        },
        {
          path: "quize/:id",
          element: <QuizePage />,
        },
        {
          path: "quize/play/:id",
          element: <QuizePlay />,
        },
        {
          path: "quize/completed/:id",
          element: <QuizeCompletedPage />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
