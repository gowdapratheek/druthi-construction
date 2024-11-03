import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Err from "./pages/Err";
import App from "./App";
import Home from "./pages/Home";
import Faqs from "./pages/Faqs";
import AboutUs from "./pages/AboutUs";
import EstimateSection from "./pages/EstimateSection";
import Services from "./pages/Services";
import ContactUs from "./pages/ContactUs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Err />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/EstimateSection ",
        element: <EstimateSection/>,
      },
      {
        path: "faqs",
        element: <Faqs />,
      },
      {
        path: "services",
        element: <Services />,
      },
      {
        path: "aboutus",
        element: <AboutUs />,
      },
      {
        path: "contactus",
        element: <ContactUs />,
      },
      {
        path: "*",
        element: <Err />,
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
