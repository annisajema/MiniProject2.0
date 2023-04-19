import { useEffect, useState } from "react";
import axios from "axios";

const api_key = "cb2df51ab2003cdd9a5aa36d34347215";
const BASE_URL = "https://api.themoviedb.org/3";
const SEARCH_URL =
  "https://api.themoviedb.org/3/search/movie?api_key=cb2df51ab2003cdd9a5aa36d34347215&language=en-US&page=1&include_adult=false";
const getImage = (path) => `https://image.tmdb.org/t/p/original/${path}`;

function Carousel() {
  const [playing, setPlaying] = useState([]);
  const url = axios.create({ baseURL: BASE_URL });
  const getPlaying = url.get("movie/now_playing", { params: { api_key } });
  const getPopular = url.get("movie/popular", { params: { api_key } });

  useEffect(() => {
    getPlaying.then((response) => {
      setPlaying(response.data.results);
    });
  }, []);

  return (
    <div className="App">
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
          {/* <div> */}
          {playing.slice(0, 3).map((movie, i) => (
            <div key={i}>
              <div className="carousel-item active" data-bs-interval="3000">
                <img
                  src={getImage(movie.backdrop_path)}
                  className="d-block w-100"
                  alt="..."
                />
                <div className="carousel-overlay">
                  <div className="carousel-caption">
                    <div className="carousel-detail mb-0">{movie.title}</div>
                    <div className="carousel-text">{movie.overview}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          {/* </div> */}
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
    </div>
  );
}

export default Carousel;
