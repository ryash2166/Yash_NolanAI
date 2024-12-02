import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";

import Home from "./Pages/Home";
import AboutUs from "./Pages/AboutUs";
import Router from "./Router/Router";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Router />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/aboutus", element: <AboutUs /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
