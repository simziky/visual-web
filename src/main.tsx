import { StrictMode, useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  useNavigation,
  Outlet,
} from "react-router-dom";
import Root from "./route.tsx";
import "./index.css";
import Loader from "./component/navigations/loader.tsx";

const App = () => {
  const [isInitialLoading, setIsInitialLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsInitialLoading(false);
    }, 3000); // Adjust timeout duration as needed

    return () => clearTimeout(timeout); // Cleanup timeout on unmount
  }, []);

  if (isInitialLoading) {
    return <Loader />;
  }

  return <RouterProvider router={router} />;
};

const WithLoader = () => {
  const navigation = useNavigation();
  const isRouterLoading = navigation.state === "loading";

  return (
    <>
      {isRouterLoading && <Loader />}
      <Outlet />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "*",
    Component: WithLoader,
    children: [
      {
        path: "*",
        Component: Root,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
