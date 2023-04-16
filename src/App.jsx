import { useEffect, useState } from "react";
import "./App.css";
import "./index.css";
import Navbar from "./components/navbar";
import Carousel from "./components/carousel";
import Home from "./pages/home";
import Footer from "./components/footer";
// import Signin from "./signin-modal";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <div>
        <Navbar />
        <Carousel />
        <Home />
        <Footer />
      </div>
    </div>
  );
}

export default App;
