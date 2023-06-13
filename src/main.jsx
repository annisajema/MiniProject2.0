import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import MoviesPlaying from './pages/movies-playing'
import MoviesPopular from './pages/movies-popular'
import SeriesPopular from './pages/series-popular'
import Contact from './pages/contact'
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <p>Page Not Found</p>,
  },
  {
    path: "/contact",
    element: <Contact />,
    errorElement: <p>Page Not Found</p>,
  },
  {
    path: "/movies-playing",
    element: <MoviesPlaying />,
    errorElement: <p>Page Not Found</p>,
  },
  {
    path: "/movies-popular",
    element: <MoviesPopular />,
    errorElement: <p>Page Not Found</p>,
  },
  {
    path: "/series-popular",
    element: <SeriesPopular />,
    errorElement: <p>Page Not Found</p>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);

