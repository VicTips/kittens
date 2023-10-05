import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import NotFound from "../components/NotFound";
import Detail from "../components/Detail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/:id", element: <Detail /> },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

export default router;
