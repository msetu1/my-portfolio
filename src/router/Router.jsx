import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Resume from "../pages/Resume";
import Contact from "../pages/Contact";
import About from "../pages/About";
import Home from "../pages/Home";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children: [
        {
          path: "/",
          element:<Home></Home>,
        },
        
        {
          path: "resume",
          element:<Resume></Resume>,
        },
        {
          path: "contact",
          element:<Contact></Contact>,
        },
        {
          path: "about",
          element:<About></About>,
        },
      ],
    },
  ]);

export default router;