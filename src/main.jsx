import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
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
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);

