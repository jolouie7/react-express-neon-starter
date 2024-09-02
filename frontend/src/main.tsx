import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import ErrorPage from "./components/error-page";
import { SignUpForm } from "./components/sign-up.tsx";
import { SignInForm } from "./components/sign-in.tsx";
import Navbar from "./components/navbar";

const Layout = () => (
  <>
    <Navbar />
    <div className="mt-14 pt-4">
      {" "}
      {/* Add this wrapper div */}
      <Outlet />
    </div>
  </>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "sign-up",
        element: <SignUpForm />,
      },
      {
        path: "sign-in",
        element: <SignInForm />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
