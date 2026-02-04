import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Contact from "./components/Contact.jsx";
import Header from "./components/Header.jsx";
import Home from "./components/Home.jsx";
import Error1 from "./components/Error1.jsx";
import Error2 from "./components/Error2.jsx";
import CountryDetail from "./components/CountryDetail.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error1 />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/country",
        element: <CountryDetail />,
      },
    ],
  },
]);

const root = createRoot(document.querySelector("#root"));

// root.render(
//     <>
//     <Header />
//     <RouterProvider router={router} />
//     </>
// );
root.render(<RouterProvider router={router} />);
