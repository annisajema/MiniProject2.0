import { useEffect, useState } from "react";
// import ".src/App.css";
// import "./index.css";
import axios from "axios";

const api_key = "cb2df51ab2003cdd9a5aa36d34347215";
const BASE_URL = "https://api.themoviedb.org/3";
const SEARCH_URL =
  "https://api.themoviedb.org/3/search/movie?api_key=cb2df51ab2003cdd9a5aa36d34347215&language=en-US&page=1&include_adult=false";
const query = "";
const getImage = (path) => `https://image.tmdb.org/t/p/w300/${path}`;

function Carousel() {
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

  //   useEffect(() => {
  //     getPlaying.then((res) => {
  //       setPlaying(res.data.results.slice(0, 7));
  //       console.log(res.data.results);
  //     });
  //   }, []);

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
      {/* Carousel */}
      {/* {playing.map((movie, i) => {
        return ( */}
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
              src="https://www.themoviedb.org/t/p/w1280/yRlQPl8ijAE2baae556dKZpOwmX.jpg"
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-overlay"></div>
            <div className="carousel-caption">
              <p className="carousel-detail mb-0">SING 2</p>
              <p className="carousel-text">
                Buster Moon and his friends must persuade reclusive rock star
                Clay Calloway to join them for the opening of a new show.
              </p>
              <div className="carousel-btn">
                <button
                  type="button"
                  className="btn btn-light btn-watch me-2"
                  style={{fontSize: "0.75rem",
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
              src="https://www.themoviedb.org/t/p/w1280/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg"
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-overlay"></div>
            <div className="carousel-caption">
              <p className="carousel-detail mb-0">THE PROMISED NEVERLAND</p>
              <p className="carousel-text">
                A group of the smartest kids at a seemingly perfect orphanage
                uncover its dark secret, and set in motion a dangerous and
                desperate escape plan.
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
              src="https://www.themoviedb.org/t/p/w1280/iVWGk8Qauqm8aFsuIcgb8r0DlUa.jpg"
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-overlay"></div>
            <div className="carousel-caption">
              <p className="carousel-detail mb-0">CJ7</p>
              <p className="carousel-text">
                A poor Chinese laborer learns important lessons after his son
                gets a strange new toy.
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
      {/* );
      })} */}
    </div>
  );
}

export default Carousel;
