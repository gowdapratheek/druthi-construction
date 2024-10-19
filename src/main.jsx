import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Err from "./pages/Err";
import App from "./App";
import Home from "./pages/Home";
import Faqs from "./pages/Faqs";

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
        path: "faqs",
        element: <Faqs />,
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
