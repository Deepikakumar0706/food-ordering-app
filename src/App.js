import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";

import HeaderComponent from "./components/header";
import FooterComponent from "./components/footer";
import MainComponent from "./components/maincomponents";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import HomePage from "./components/HomePage";
import Help from "./components/Help";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import ErrorPage from "./components/ErrorPage";
import RestaurantOverview from "./components/RestaurantOverview";
const Application = () => {
  return (
    <div>
      <HeaderComponent />
      <Outlet />
      <FooterComponent />
    </div>
  );
};
const Groceries = lazy(() => import("./components/Groceries"));
const appRoute = createBrowserRouter([
  {
    path: "/",
    element: <Application />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <MainComponent />,
      },
      {
        path: "/home",
        element: <HomePage />,
      },
      {
        path: "/help",
        element: <Help />,
      },
      {
        path: "/aboutUs",
        element: <AboutUs />,
      },
      {
        path: "/contactUs",
        element: <ContactUs />,
      },
      {
        path: "/details/:id",
        element: <RestaurantOverview />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Groceries />
          </Suspense>
        ),
      },
    ],
  },
]);
const rootEle = ReactDOM.createRoot(document.getElementById("root"));
rootEle.render(<RouterProvider router={appRoute}></RouterProvider>);
