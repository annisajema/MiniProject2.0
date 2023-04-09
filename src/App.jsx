import { useEffect, useState } from "react";
import "./App.css";
import "./index.css";
import axios from "axios";
import Navbar from "./components/navbar";
import Carousel from "./components/carousel";
import Home from "./pages/home";
import Footer from "./components/footer";
// import Signin from "./signin-modal";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

// const api_key = "cb2df51ab2003cdd9a5aa36d34347215";
// const BASE_URL = "https://api.themoviedb.org/3";
// const SEARCH_URL = "https://api.themoviedb.org/3/search/movie?api_key=cb2df51ab2003cdd9a5aa36d34347215&language=en-US&page=1&include_adult=false";
// const query = "";
// const getImage = (path) => `https://image.tmdb.org/t/p/w300/${path}`;

function App() {
  // const [data, setData] = useState([]);
  // const [playing, setPlaying] = useState([]);
  // const url = axios.create({ baseURL: BASE_URL });
  // const search = url.get("search/movie", { params: { api_key, query } });
  // const getPlaying = url.get("movie/now_playing", { params: { api_key } });
  // const getPopular = url.get("movie/popular", { params: { api_key } });
  // // const result = [];

  // useEffect(() => {
  //   getPopular.then((res) => {
  //     setData(res.data.results.slice(0, 7));
  //     console.log(res.data.results);
  //   });
  // }, []);

  // useEffect(() => {
  //   getPlaying.then((res) => {
  //     setPlaying(res.data.results.slice(0, 7));
  //     console.log(res.data.results);
  //   });
  // }, []);

  // useEffect(() => {
  //    search.then((res) => {
  //     console.log(res.data.results);
  //     setData(res.data.results);
  //   });
  // }, []);

  // useEffect(()=>{
  //   Axios({
  //     method: "get",
  //     url: "https://api.themoviedb.org/3/movie/343611?api_key=cb2df51ab2003cdd9a5aa36d34347215",
  //     data: {
  //       title: title,
  //       poster_path: poster_path,
  //     },
  //   }).then(function (response) {
  //     handleGetAllData();
  //   });
  // })

  // const handleGetAllData = () => {
  //   Axios({
  //     method: "get",
  //     url: "https://api.themoviedb.org/3/movie/343611?api_key=cb2df51ab2003cdd9a5aa36d34347215",
  //     // data: {
  //     //   name: 'x',
  //     //   age: '1'
  //     // }
  //   }).then(function (response) {
  //     console.log(response.data.data);
  //     setData(response.data.data);
  //   });
  // };

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
