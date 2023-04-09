import { useEffect, useState } from "react";
import "./App.css";
import "./index.css";
import axios from "axios";

const api_key = "cb2df51ab2003cdd9a5aa36d34347215";
const BASE_URL = "https://api.themoviedb.org/3";
const SEARCH_URL =
  "https://api.themoviedb.org/3/search/movie?api_key=cb2df51ab2003cdd9a5aa36d34347215&language=en-US&page=1&include_adult=false";
const query = "";
const getImage = (path) => `https://image.tmdb.org/t/p/w300/${path}`;

function App() {
  const [data, setData] = useState([]);
  const [playing, setPlaying] = useState([]);
  const url = axios.create({ baseURL: BASE_URL });
  const search = url.get("search/movie", { params: { api_key, query } });
  const getPlaying = url.get("movie/now_playing", { params: { api_key } });
  const getPopular = url.get("movie/popular", { params: { api_key } });
  const result = [];

  // const MovieOverview = (id, original_title, poster_path) => {
  //   const index = currentIndex;
  //   if(currentItem = data.length-1){
  //     index = 0;
  //   }
  //   this.setState({
  //     currentItem = data[index]
  //   })
  //   currentIndex++;
  // }

  // }

  useEffect(() => {
    getPopular.then((res) => {
      setData(res.data.results.slice(0, 7));
      console.log(res.data.results);
    });
  }, []);

  useEffect(() => {
    getPlaying.then((res) => {
      setPlaying(res.data.results.slice(0, 7));
      console.log(res.data.results);
    });
  }, []);

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
      <div className="container-fluid p-0">
        <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
          <div className="container-fluid">
            <a className="navbar-brand">
              <span style={{ color: "white" }}>CIN</span>
              <span style={{ color: "rgb(159, 100, 214)" }}>&eacute;</span>
              <span style={{ color: "white" }}>MA</span>
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    Home
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link active"
                    href="movie.html"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Movies
                  </a>
                  <ul
                    className="dropdown-menu w-auto h-auto"
                    style={{ backgroundColor: "rgb(13, 13, 13)" }}
                  >
                    <li>
                      <a
                        className="dropdown-item text-light dropdown-menu-dark"
                        href="movies(asian).html"
                      >
                        Asian
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item text-light dropdown-menu-dark"
                        href="movies(comedy).html"
                      >
                        Comedy
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item text-light dropdown-menu-dark"
                        href="movies(romance).html"
                      >
                        Romance
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" href="series.html">
                    Series
                  </a>
                </li>
              </ul>

              {/* Search bar */}

              <form className="d-flex search-bar" role="search">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-search"
                  viewBox="0 0 16 16"
                >
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                </svg>
                <input
                  className="search-bar"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
              </form>

              {/* Dropdown Notif */}
              <div>
                <div id="toggle-hide-show" className="btn-group">
                  <button
                    id="notif"
                    className="btn btn-link text-decoration-none link-light"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-bell"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z" />
                    </svg>
                    <span
                      id="dropdown-notif"
                      className="position-absolute top-20 start-60 translate-middle p-1 rounded-circle badge-notif"
                      style={{ backgroundColor: "rgb(159, 100, 214)" }}
                    ></span>
                  </button>
                  <ul
                    className="dropdown-menu dropdown-menu-lg-end"
                    style={{ backgroundColor: "rgba(39, 7, 46, 0.9)" }}
                  >
                    <li>
                      <div
                        className="alert alert-success alert-dismissible fade show"
                        role="alert"
                      >
                        New movie releases, check it out!
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="alert"
                          aria-label="Close"
                        ></button>
                      </div>
                    </li>
                    <li>
                      <div
                        className="list-group bg-black text-light border-0 rounded-3 mb-1 p-2"
                        aria-current="true"
                      >
                        <a
                          href="movies(asian).html"
                          className="text-decoration-none text-light"
                        >
                          <img
                            src="https://resizing.flixster.com/jwnF5F7p2Ogsvm4sFoFSzu9PmHw=/300x300/v2/https://resizing.flixster.com/xkP5Au0QZpS3o13TgBmswdBC_bA=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzE2NTBhZGRkLTM5ZTAtNDU5Yy1hOTYyLTI4YTEyMmJkZTRlNi5qcGc="
                            className="float-sm-start me-3"
                            alt=""
                            width="60px"
                            height="80px"
                          />
                          <h5>Demon Slayer the Movie: Mugen Train</h5>
                          <h6>2020</h6>
                          <small className="mb-2">Animation</small>
                        </a>
                      </div>
                    </li>
                    <li>
                      <div
                        className="list-group bg-black text-light border-0 rounded-3 mb-1 p-2"
                        aria-current="true"
                      >
                        <a
                          href="movies(asian).html"
                          className="text-decoration-none text-light"
                        >
                          <img
                            src="https://m.media-amazon.com/images/M/MV5BODM0NmVjMzUtOTJhNi00N2ZhLWFkYmMtYmZmNjRiY2M1YWY4XkEyXkFqcGdeQXVyOTgxOTA5MDg@._V1_QL75_UX380_CR0,4,380,562_.jpg"
                            className="float-sm-start me-3"
                            alt=""
                            width="60px"
                            height="80px"
                          />
                          <h5>Jujutsu Kaisen 0: The Movie</h5>
                          <h6>2021</h6>
                          <small className="mb-2">Animation</small>
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Sign In */}
              <div>
                <button
                  className="btn btn-link btn-nav text-decoration-none link-light"
                  data-bs-toggle="modal"
                  data-bs-target="#signInModal"
                >
                  Sign in
                </button>
              </div>

              {/* Contact Us */}
              <div>
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <a className="nav-link active" href="contact.html">
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>

              {/* Dark Mode */}

              <button
                id="dark-switch"
                style={{ backgroundColor: "black" }}
                className="btn btn-secondary"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-lightbulb-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M2 6a6 6 0 1 1 10.174 4.31c-.203.196-.359.4-.453.619l-.762 1.769A.5.5 0 0 1 10.5 13h-5a.5.5 0 0 1-.46-.302l-.761-1.77a1.964 1.964 0 0 0-.453-.618A5.984 5.984 0 0 1 2 6zm3 8.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1l-.224.447a1 1 0 0 1-.894.553H6.618a1 1 0 0 1-.894-.553L5.5 15a.5.5 0 0 1-.5-.5z"></path>
                </svg>
              </button>
            </div>
          </div>
        </nav>

        <div>
          {/* Carousel */}
          <div
            id="carouselExampleIndicators"
            className="carousel slide carousel-fade"
            data-bs-ride="carousel"
          >
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="0"
                className="indicator-round active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="1"
                className="indicator-round"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="2"
                className="indicator-round"
                aria-label="Slide 3"
              ></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active" data-bs-interval="3000">
                <img
                  src="https://dai3fd1oh325y.cloudfront.net/images/avif/originald/036975X0-landscape.avif"
                  className="d-block w-100"
                  alt="..."
                />
                <div className="carousel-overlay"></div>
                <div className="carousel-caption">
                  <p className="carousel-detail mb-0">SING 2</p>
                  <p className="carousel-text">
                    Buster Moon and his friends must persuade reclusive rock
                    star Clay Calloway to join them for the opening of a new
                    show.
                  </p>
                  <div className="carousel-btn">
                    <button
                      type="button"
                      className="btn btn-light btn-watch me-2"
                      style={{
                        // --bs-btn-padding-y: 0.5rem;
                        // --bs-btn-padding-x: 0.5rem;
                        // --bs-btn-font-size: 0.75rem;
                        marginTop: "10px",
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        className="bi bi-play-fill"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M4 2.69127C4 1.93067 4.81547 1.44851 5.48192 1.81506L22.4069 11.1238C23.0977 11.5037 23.0977 12.4963 22.4069 12.8762L5.48192 22.1849C4.81546 22.5515 4 22.0693 4 21.3087V2.69127Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                      <a
                        href="https://youtu.be/EPZu5MA2uqI"
                        target="_blank"
                        className="text-decoration-none text-dark"
                      >
                        <span className="m-2 fs-6">
                          <strong>Watch Now</strong>
                        </span>
                      </a>
                    </button>
                    <button
                      type="button"
                      className="btn btn-light btn-detail"
                      data-bs-toggle="modal"
                      data-bs-target="#movie3"
                      style={{
                        // --bs-btn-padding-y: 0.5rem;
                        // --bs-btn-padding-x: 0.5rem;
                        // --bs-btn-font-size: 0.75rem;
                        marginTop: "10px",
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        className="bi bi-plus-circle"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3ZM1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12ZM13 10V18H11V10H13ZM12 8.5C12.8284 8.5 13.5 7.82843 13.5 7C13.5 6.17157 12.8284 5.5 12 5.5C11.1716 5.5 10.5 6.17157 10.5 7C10.5 7.82843 11.1716 8.5 12 8.5Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                      <span className="m-2 fs-6">More Details</span>
                    </button>
                  </div>
                </div>
              </div>
              <div className="carousel-item" data-bs-interval="3000">
                <img
                  src="https://dai3fd1oh325y.cloudfront.net/images/avif/originald/034524X0-landscape.avif"
                  className="d-block w-100"
                  alt="..."
                />
                <div className="carousel-overlay"></div>
                <div className="carousel-caption">
                  <p className="carousel-detail mb-0">THE PROMISED NEVERLAND</p>
                  <p className="carousel-text">
                    A group of the smartest kids at a seemingly perfect
                    orphanage uncover its dark secret, and set in motion a
                    dangerous and desperate escape plan.
                  </p>
                  <div className="carousel-btn">
                    <button
                      type="button"
                      className="btn btn-light btn-watch me-2"
                      style={{
                        // --bs-btn-padding-y: 0.5rem;
                        // --bs-btn-padding-x: 0.5rem;
                        // --bs-btn-font-size: 0.75rem;
                        marginTop: "10px",
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        className="bi bi-play-fill"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M4 2.69127C4 1.93067 4.81547 1.44851 5.48192 1.81506L22.4069 11.1238C23.0977 11.5037 23.0977 12.4963 22.4069 12.8762L5.48192 22.1849C4.81546 22.5515 4 22.0693 4 21.3087V2.69127Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                      <a
                        href="https://youtu.be/sALwG-NERKI"
                        target="_blank"
                        className="text-decoration-none text-dark"
                      >
                        <span className="m-2 fs-6">
                          <strong>Watch Now</strong>
                        </span>
                      </a>
                    </button>
                    <button
                      type="button"
                      className="btn btn-light btn-detail"
                      data-bs-toggle="modal"
                      data-bs-target="#movie4"
                      style={{
                        // --bs-btn-padding-y: 0.5rem;
                        // --bs-btn-padding-x: 0.5rem;
                        // --bs-btn-font-size: 0.75rem;
                        marginTop: "10px",
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        className="bi bi-plus-circle"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3ZM1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12ZM13 10V18H11V10H13ZM12 8.5C12.8284 8.5 13.5 7.82843 13.5 7C13.5 6.17157 12.8284 5.5 12 5.5C11.1716 5.5 10.5 6.17157 10.5 7C10.5 7.82843 11.1716 8.5 12 8.5Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                      <span className="m-2 fs-6">More Details</span>
                    </button>
                  </div>
                </div>
              </div>

              <div className="carousel-item" data-bs-interval="3000">
                <img
                  src="https://dai3fd1oh325y.cloudfront.net/images/avif/originald/030911X0-landscape.avif"
                  className="d-block w-100"
                  alt="..."
                />
                <div className="carousel-overlay"></div>
                <div className="carousel-caption">
                  <p className="carousel-detail mb-0">CJ7</p>
                  <p className="carousel-text">
                    A poor Chinese laborer learns important lessons after his
                    son gets a strange new toy.
                  </p>
                  <div className="carousel-btn">
                    <button
                      type="button"
                      className="btn btn-light btn-watch me-2"
                      style={{
                        // --bs-btn-padding-y: 0.5rem;
                        // --bs-btn-padding-x: 0.5rem;
                        // --bs-btn-font-size: 0.75rem;
                        marginTop: "10px",
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        className="bi bi-play-fill"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M4 2.69127C4 1.93067 4.81547 1.44851 5.48192 1.81506L22.4069 11.1238C23.0977 11.5037 23.0977 12.4963 22.4069 12.8762L5.48192 22.1849C4.81546 22.5515 4 22.0693 4 21.3087V2.69127Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                      <a
                        href="https://youtu.be/ZePBF0bBdz8"
                        target="_blank"
                        className="text-decoration-none text-dark"
                      >
                        <span className="m-2 fs-6">
                          <strong>Watch Now</strong>
                        </span>
                      </a>
                    </button>
                    <button
                      type="button"
                      className="btn btn-light btn-detail"
                      data-bs-toggle="modal"
                      data-bs-target="#movie5"
                      style={{
                        // --bs-btn-padding-y: 0.5rem;
                        // --bs-btn-padding-x: 0.5rem;
                        // --bs-btn-font-size: 0.75rem;
                        marginTop: "10px",
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        className="bi bi-plus-circle"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3ZM1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12ZM13 10V18H11V10H13ZM12 8.5C12.8284 8.5 13.5 7.82843 13.5 7C13.5 6.17157 12.8284 5.5 12 5.5C11.1716 5.5 10.5 6.17157 10.5 7C10.5 7.82843 11.1716 8.5 12 8.5Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                      <span className="m-2 fs-6">More Details</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>

          {/* Card New Releases */}

          <div className="row g-3 d-inline-flex" style={{ margin: "0 3%" }}>
            <h4 id="dark-switch" className="text-light-emphasis pt-3 mb-0">
              New Releases
            </h4>

            <div className="grid">
              {playing.map((movie, i) => {
                return (
                  <div key={i}>
                    <div className="movie-container">
                      <div
                        className=" card-body"
                        data-bs-toggle="modal"
                        data-bs-target={`#modal${movie.id}`}
                      >
                        <img
                          className="card-img"
                          src={getImage(movie.poster_path)}
                        />
                        <div className="overlay-grid">
                          {/* <div className="title-text">{movie.original_title}</div> */}
                          {/* <div className="text-genre">Drama, Romance</div> */}
                        </div>
                        <div className="movie-title">
                          {movie.original_title}
                        </div>
                      </div>
                    </div>

                    <div
                      className="modal fade"
                      id={`modal${movie.id}`}
                      tabIndex="-1"
                      aria-labelledby="movie1Label"
                      aria-hidden="true"
                    >
                      <div className="modal-dialog">
                        <div
                          className="modal-content"
                          style={{ backgroundColor: "rgba(13, 13, 13, 0.9)" }}
                        >
                          <div className="modal-header border-0 pt-4 pb-0">
                            <div
                              className="modal-title fs-5 text-light"
                              id="exampleModalLabel"
                            >
                              <span>{movie.original_title}</span>
                              <span> ({movie.id})</span>
                            </div>
                            <button
                              type="button"
                              className="btn-close btn-close-signin-modal btn-close-white"
                              data-bs-dismiss="modal"
                              aria-label="Close"
                            ></button>
                          </div>

                          <div className="modal-body">
                            <img
                              src={getImage(movie.poster_path)}
                              className="card-img-top w-50 h-50 float-start me-3 rounded-3"
                              alt={movie.original_title}
                            />

                            <div className="overview text-light mb-2">
                              {movie.overview}
                            </div>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              className="bi bi-star-fill me-2"
                              viewBox="0 0 16 16"
                              style={{ color: "yellow" }}
                            >
                              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                            </svg>
                            <span className="text-light">
                              Score: {Math.floor(movie.popularity)}
                            </span>
                            <div className="carousel-btn">
                              <a
                                href="https://www.netflix.com/search?q=first%20love&jbv=81137509"
                                target="_blank"
                                className="text-decoration-none text-dark"
                              >
                                <button
                                  type="button"
                                  className="btn btn-light btn-watch mt-3 me-2 w-100"
                                  style={{
                                    marginTop: "10px",
                                  }}
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    fill="currentColor"
                                    className="bi bi-play-fill"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      d="M4 2.69127C4 1.93067 4.81547 1.44851 5.48192 1.81506L22.4069 11.1238C23.0977 11.5037 23.0977 12.4963 22.4069 12.8762L5.48192 22.1849C4.81546 22.5515 4 22.0693 4 21.3087V2.69127Z"
                                      fill="currentColor"
                                    ></path>
                                  </svg>
                                  <span className="m-2 fs-6">
                                    <strong>Watch Now</strong>
                                  </span>
                                </button>
                              </a>
                              <button
                                type="button"
                                className="btn btn-light btn-watchlist w-100"
                                style={{
                                  marginTop: "10px",
                                }}
                              >
                                <svg
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="Hawkins-Icon Hawkins-Icon-Standard"
                                >
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M11 2V11H2V13H11V22H13V13H22V11H13V2H11Z"
                                    fill="currentColor"
                                  ></path>
                                </svg>
                                <span className="m-2 fs-6">Add to List</span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div></div>

            {/* <div
              className="col-12 col-sm-6 col-md-3 col-lg-4 col-xl-2 me-3 mb-3"
              style={{ width: "150px", height: "200px" }}
            >
              <div
                className="card"
                style={{ border: "none", width: "150px" }}
                data-bs-toggle="modal"
                data-bs-target="#movie1"
              >
                {data.map((movie) => (
                  <div className="card-body p-0">
                    <img
                      className="card-img"
                      src={getImage(movie.poster_path)}
                    />
                    <div className="overlay">
                      <div className="text">{movie.original_title}</div>
                      <div className="text-genre">Drama, Romance</div>
                    </div>
                  </div>
                ))}
              </div>
            </div> */}
          </div>

          {/* Card Trending Now*/}
          <div className="row g-3 d-inline-flex" style={{ margin: "0 3%" }}>
            <h4 id="dark-switch" className="text-light-emphasis mb-0">
              Popular
            </h4>

            <div className="grid">
              {data.map((movie, i) => {
                return (
                  <div key={i}>
                    <div className="movie-container">
                      <div
                        className=" card-body"
                        data-bs-toggle="modal"
                        data-bs-target={`#modal${movie.id}`}
                      >
                        <img
                          className="card-img"
                          src={getImage(movie.poster_path)}
                        />
                        <div className="overlay-grid">
                          {/* <div className="title-text">{movie.original_title}</div> */}
                          {/* <div className="text-genre">Drama, Romance</div> */}
                        </div>
                        <div className="movie-title">
                          {movie.original_title}
                        </div>
                      </div>
                    </div>

                    <div
                      className="modal fade"
                      id={`modal${movie.id}`}
                      tabIndex="-1"
                      aria-labelledby="movie1Label"
                      aria-hidden="true"
                    >
                      <div className="modal-dialog">
                        <div
                          className="modal-content"
                          style={{ backgroundColor: "rgba(13, 13, 13, 0.9)" }}
                        >
                          <div className="modal-header border-0 pt-4 pb-0">
                            <div
                              className="modal-title fs-5 text-light"
                              id="exampleModalLabel"
                            >
                              <span>{movie.original_title}</span>
                              <span> ({movie.id})</span>
                            </div>
                            <button
                              type="button"
                              className="btn-close btn-close-signin-modal btn-close-white"
                              data-bs-dismiss="modal"
                              aria-label="Close"
                            ></button>
                          </div>

                          <div className="modal-body">
                            <img
                              src={getImage(movie.poster_path)}
                              className="card-img-top w-50 h-50 float-start me-3 rounded-3"
                              alt={movie.original_title}
                            />

                            <div className="overview text-light mb-2">
                              {movie.overview}
                            </div>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              className="bi bi-star-fill me-2"
                              viewBox="0 0 16 16"
                              style={{ color: "yellow" }}
                            >
                              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                            </svg>
                            <span className="text-light">
                              Score: {Math.floor(movie.popularity)}
                            </span>
                            <div className="carousel-btn">
                              <a
                                href="https://www.netflix.com/search?q=first%20love&jbv=81137509"
                                target="_blank"
                                className="text-decoration-none text-dark"
                              >
                                <button
                                  type="button"
                                  className="btn btn-light btn-watch mt-3 me-2 w-100"
                                  style={{
                                    marginTop: "10px",
                                  }}
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    fill="currentColor"
                                    className="bi bi-play-fill"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      d="M4 2.69127C4 1.93067 4.81547 1.44851 5.48192 1.81506L22.4069 11.1238C23.0977 11.5037 23.0977 12.4963 22.4069 12.8762L5.48192 22.1849C4.81546 22.5515 4 22.0693 4 21.3087V2.69127Z"
                                      fill="currentColor"
                                    ></path>
                                  </svg>
                                  <span className="m-2 fs-6">
                                    <strong>Watch Now</strong>
                                  </span>
                                </button>
                              </a>
                              <button
                                type="button"
                                className="btn btn-light btn-watchlist w-100"
                                style={{
                                  marginTop: "10px",
                                }}
                              >
                                <svg
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="Hawkins-Icon Hawkins-Icon-Standard"
                                >
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M11 2V11H2V13H11V22H13V13H22V11H13V2H11Z"
                                    fill="currentColor"
                                  ></path>
                                </svg>
                                <span className="m-2 fs-6">Add to List</span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div></div>

            {/* <div
              className="col-12 col-sm-6 col-md-3 col-lg-4 col-xl-2 me-3 mb-3"
              style={{ width: "150px", height: "200px" }}
            >
              <div
                className="card"
                style={{ border: "none", width: "150px" }}
                data-bs-toggle="modal"
                data-bs-target="#movie1"
              >
                {data.map((movie) => (
                  <div className="card-body p-0">
                    <img
                      className="card-img"
                      src={getImage(movie.poster_path)}
                    />
                    <div className="overlay">
                      <div className="text">{movie.original_title}</div>
                      <div className="text-genre">Drama, Romance</div>
                    </div>
                  </div>
                ))}
              </div>
            </div> */}
          </div>
        </div>

        {/* Modal Sign In*/}
        <div
          className="modal fade text-light"
          id="signInModal"
          tabIndex="-1"
          aria-labelledby="signInModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content border-0">
              <div className="sign-in">
                <button
                  type="button"
                  className="btn-close btn-close-signin-modal btn-close-white"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
                <div className="mb-4 text-light signin-text">Sign in</div>
                <div className="d-flex flex-column" style={{ gap: "10px" }}>
                  <button type="button" className="btn btn-light">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-google"
                      viewBox="0 0 16 16"
                    >
                      <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
                    </svg>
                    Sign in with Google
                  </button>
                  <button type="button" className="btn btn-light mb-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="#1976D2"
                      className="bi bi-facebook"
                      viewBox="0 0 16 16"
                    >
                      <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                    </svg>
                    Sign in with Facebook
                  </button>
                </div>

                <div className="or-text" style={{ textAlign: "center" }}>
                  or
                </div>

                <div className="mt-3 mb-3">
                  <input
                    className="form-control fs-4"
                    type="email"
                    id="email"
                    placeholder="Phone, email, or username"
                  />
                </div>
                <div className="d-flex flex-column">
                  <button
                    type="button"
                    className="btn btn-light mb-2"
                    style={{
                      backgroundColor: "rgb(159, 100, 214)",
                      color: "white",
                      borderColor: "rgb(159, 100, 214)",
                    }}
                  >
                    Sign In
                  </button>
                  <button type="button" className="btn btn-secondary mb-2">
                    Sign Up
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="container-fluid p-0 mt-5">
          <footer className="footer text-center text-white">
            <div
              className="text-center p-3"
              style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
            >
              <div className="container p-4 pb-0">
                <div className="mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-facebook me-3"
                    viewBox="0 0 16 16"
                  >
                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                  </svg>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-twitter me-3"
                    viewBox="0 0 16 16"
                  >
                    <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                  </svg>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-instagram me-3"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                  </svg>
                </div>
              </div>
              © 2023 Copyright
              <a className="text-white text-decoration-none" href="">
                Cinema
              </a>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default App;
