import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";

import Home from "./Pages/Home";
import AboutUs from "./Pages/AboutUs";
import Router from "./Router/Router";
import Pricing from "./Pages/Pricing";
import Features from "./Pages/Features";
import Blog from "./Pages/Blog";
import Testimonials from "./Pages/Testimonials";
import ForStudio from "./Components/PricingComponent/ForStudio";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Router />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/aboutus", element: <AboutUs /> },
        { path: "/pricing", element: <Pricing /> },
        { path: "/for-studio", element: <ForStudio /> },
        { path: "/features", element: <Features /> },
        { path: "/testimonials", element: <Testimonials /> },
        { path: "/blog", element: <Blog /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
