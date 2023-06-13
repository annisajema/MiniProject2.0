import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { useEffect, useState } from "react";
import axios from "axios";

const api_key = "cb2df51ab2003cdd9a5aa36d34347215";
const BASE_URL = "https://api.themoviedb.org/3";
const SEARCH_URL =
  "https://api.themoviedb.org/3/search/movie?api_key=cb2df51ab2003cdd9a5aa36d34347215&language=en-US&page=1&include_adult=false";
const getImage = (path) => `https://image.tmdb.org/t/p/original/${path}`;

function SeriesPopular() {
  const [popular, setPopular] = useState([]);
  const url = axios.create({ baseURL: BASE_URL });
  const getPopular = url.get("tv/popular", { params: { api_key } });

  useEffect(() => {
    getPopular.then((response) => {
      setPopular(response.data.results);
      console.log(response.data.results);
    });
  }, []);
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <div className="row g-3 d-inline-flex" style={{ margin: "0 3%" }}>
          <h4 id="dark-switch" className="mb-0">
            Popular Series
          </h4>

          {popular.map((movie, i) => {
            return (
              <div
                key={i}
                className="col-4 col-xs-4 col-sm-4 col-md-3 col-lg-2 col-xl-2 col-xxl-1"
              >
                <div className="movie-container">
                  <div
                    className="card-body"
                    data-bs-toggle="modal"
                    data-bs-target={`#modal${movie.id}`}
                  >
                    <img
                      className="card-img"
                      src={getImage(movie.poster_path)}
                    />
                    <div className="overlay-grid"></div>
                    <div className="movie-title">{movie.title}</div>
                  </div>
                </div>

                {/* Modal */}
                <div
                  className="modal fade "
                  id={`modal${movie.id}`}
                  tabIndex="-1"
                  aria-labelledby="movie1Label"
                  aria-hidden="true"
                >
                  <div className="modal-dialog modal-xl mt-5">
                    <div
                      className="modal-content"
                    >
                      <img
                        src={getImage(movie.backdrop_path)}
                        alt={movie.title}
                        style={{ filter: "brightness(25%)" }}
                      />
                      <div className="overview text-light">
                        {movie.overview}
                      </div>
                      <div className="modal-header border-0 pt-4 pb-0">
                        <div
                          className="modal-title fs-5 text-light"
                          id="exampleModalLabel"
                        >
                          <div className="modal-movie-title">{movie.title}</div>
                          <ul>
                            <li>
                              <div className="modal-movie-id">
                                ID: {movie.id}
                              </div>
                            </li>
                            <li>
                              <div className="modal-movie-score text-light">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="12"
                                  height="12"
                                  fill="currentColor"
                                  className="bi bi-star-fill me-2 mb-1"
                                  viewBox="0 0 16 16"
                                  style={{ color: "yellow" }}
                                >
                                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                </svg>
                                Score: {Math.floor(movie.popularity)}
                              </div>
                            </li>
                            <li>
                              <div className="modal-movie-id">
                                ID: {movie.genre}
                              </div>
                            </li>
                          </ul>
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
                          className="modal-img float-start me-3 rounded-3"
                          alt={movie.title}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default SeriesPopular;
