import { useState } from "react";

import {
  Routes,
  Route,
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
} from "react-router-dom";

import Home from "./pages/home-page/Home.jsx";
import AboutPage from "./pages/about-page/about-page.jsx";
import MainLayout from "./layout/main-layout/main-layout.jsx";

const appRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<Home />} />
      <Route path="/about" element={<AboutPage />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={appRouter} />;
}

export default App;
