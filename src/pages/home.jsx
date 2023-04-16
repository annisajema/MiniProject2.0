import { useEffect, useState } from "react";
import axios from "axios";
// import index from "../index.css";

const api_key = "cb2df51ab2003cdd9a5aa36d34347215";
const BASE_URL = "https://api.themoviedb.org/3";
const SEARCH_URL =
  "https://api.themoviedb.org/3/search/movie?api_key=cb2df51ab2003cdd9a5aa36d34347215&language=en-US&page=1&include_adult=false";
const query = "";
const getImage = (path) => `https://image.tmdb.org/t/p/original/${path}`;

function Home() {
  const [data, setData] = useState([]);
  const [playing, setPlaying] = useState([]);
  const url = axios.create({ baseURL: BASE_URL });
  // const getPopular = url.get("movie/popular", { params: { api_key } });
  const search = url.get("search/movie", { params: { api_key, query } });
  // const getPlaying = url.get("movie/now_playing", {params: { api_key }});

  const getPlaying = url.get("movie/now_playing", {params: { api_key }});

  useEffect(() => {
    getPlaying.then((response) => {
      setPlaying(response.data.results.slice(0, 12));
      console.log(response.data.results);
    });
  }, []);

  return (
    <div className="App">
      <div className="container-fluid p-0">
        <div>
          {/* Card New Releases */}
          <div className="row g-3 d-inline-flex" style={{ margin: "0 3%" }}>
            <h4 id="dark-switch" className="pt-3 mb-0">
              Now Playing
            </h4>

            {playing.map((movie, i) => {
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
                      <div className="overlay-grid">
                        {/* <div className="title-text">{movie.original_title}</div> */}
                        {/* <div className="text-genre">Drama, Romance</div> */}
                      </div>
                      <div className="movie-title">{movie.original_title}</div>
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
                    <div className="modal-dialog modal-dialog-centered modal-xl">
                      <div
                        className="modal-content"
                        // style={{ backgroundColor: "rgba(13, 13, 13, 0.9)" }}
                      >
                        <img
                          src={getImage(movie.backdrop_path)}
                          alt={movie.original_title}
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
                            <div className="modal-movie-title">
                              {movie.original_title}
                            </div>
                            <div className="modal-movie-id">ID :{movie.id}</div>
                            <div className="modal-movie-score text-light">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="12"
                                height="12"
                                fill="currentColor"
                                className="bi bi-star-fill me-2"
                                viewBox="0 0 16 16"
                                style={{ color: "yellow" }}
                              >
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                              </svg>
                              Score: {Math.floor(movie.popularity)}
                            </div>

                            <div className="overview text-light">
                              {movie.character}
                            </div>
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
                            alt={movie.original_title}
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
      </div>
    </div>
  );
}

export default Home;
