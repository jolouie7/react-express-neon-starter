import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import ErrorPage from "./components/error-page";
import { SignUpForm } from "./components/sign-up.tsx";
import { SignInForm } from "./components/sign-in.tsx";
import Navbar from "./components/navbar";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { store } from "./store.ts";
import { Toaster } from "@/components/ui/sonner";

const Layout = () => (
  <>
    <Navbar />
    <div className="mt-14 pt-4">
      <Outlet />
      <Toaster richColors />
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

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </Provider>
  </StrictMode>,
);
