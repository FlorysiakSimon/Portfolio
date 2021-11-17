import React from "react";
import {
  BrowserRouter,
  //Routes,
  //Route,
  useRoutes,
} from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";


const App = () => {
  let routes = useRoutes([
    { path: "/", element: <HomePage /> },
  ]);
  return routes;
};

const AppWrapper = () => {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
};

export default AppWrapper;