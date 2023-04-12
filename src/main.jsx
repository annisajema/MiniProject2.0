import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import Contact from './pages/contact'
import Navbar from './components/navbar'
import Signin from './pages/signin'
import TesSignin from './pages/tes-signin'
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
    path: "/signin",
    element: <Signin />,
  },
  {
    path: "/tessignin",
    element: <TesSignin />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);

