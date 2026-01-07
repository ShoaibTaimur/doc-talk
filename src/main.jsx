import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import App from "./App";
import Blogs from "./Components/Blogs/Blogs";
import Contact from "./Components/Contact/Contact";
import DocDetail from "./Components/Doclist/DocDetail";
import Home from "./Components/Home/Home";
import MyBookings from "./Components/MyBookings/MyBookings";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        index: true,
        path: "/",
        loader: async () => {
          const response = await fetch("/docInfo.json");
          const data = await response.json();
          return data;
        },
        Component: Home,
      },
      {
        path: "/my-bookings",
        loader: async () => {
          const response = await fetch("/docInfo.json");
          const data = await response.json();
          return data;
        },
        Component: MyBookings,
      },
      {
        path: "/blogs",
        Component: Blogs,
      },
      {
        path: "/contact-us",
        Component: Contact,
      },
      {
        path: "/docDetail/:id",
        loader: async () => {
          const response = await fetch("/docInfo.json");
          const data = await response.json();
          return data;
        },
        Component: DocDetail,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
