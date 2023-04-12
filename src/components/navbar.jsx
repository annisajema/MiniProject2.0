import { useEffect, useState } from "react";
import axios from "axios";
// import Signin from "./signin-modal";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import App from "../App";

const BASE_URL = "https://api.themoviedb.org/3";
const api_key = "cb2df51ab2003cdd9a5aa36d34347215";
const url = axios.create({ baseURL: BASE_URL });
const getToken = url.get("authentication/token/new", { params: { api_key } });
// const getAuth = url.post("authentication/token/validate_with_login", { params: { api_key }});

const LoginSchema = Yup.object().shape({
  username: Yup.string().required("Required"),
  password: Yup.string().required("Required"),
});

const Navbar = () => {
  const [sessionId, setSessionId] = useState(localStorage.getItem("sessionId"));
  const [detail, setDetail] = useState("");
  const [username, setUsername] = useState("");
  const [userId, setUserId] = useState("");

  const handleLogin = async (values, { setSubmitting, setStatus }) => {
    try {
      const tokenResponse = await getToken;
      const token = tokenResponse.data.request_token;
      const authResponse = await url.post(
        "authentication/token/validate_with_login?api_key=cb2df51ab2003cdd9a5aa36d34347215",
        {
          username: values.username,
          password: values.password,
          request_token: token,
        }
      );
      const sessionResponse = await url.post(
        "authentication/session/new?api_key=cb2df51ab2003cdd9a5aa36d34347215",
        {
          api_key: api_key,
          request_token: token,
        }
      );
      const sessionId = sessionResponse.data.session_id;
      setSessionId(sessionId);
      localStorage.setItem("sessionId", sessionId);
      setSubmitting(false);
    } catch (error) {
      setStatus(error.response.data.status_message);
      setSubmitting(false);
    }
  };

  const handleLogout = () => {
    setSessionId(null);
    localStorage.removeItem("sessionId");
  };

  useEffect(() => {
    const fetchData = async () => {
      if (sessionId) {
        const response = await axios.get(
          "https://api.themoviedb.org/3/account",
          {
            params: {
              api_key: api_key,
              session_id: sessionId,
            },
          }
        );
        setUsername(response.data.username);
        setUserId(response.data.id);
      }
    };
    fetchData();
  }, [sessionId]);

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
                  <a className="nav-link active" aria-current="page" href="/">
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
                <div>
                  <button
                    className="btn btn-link btn-nav text-decoration-none link-light"
                    data-bs-toggle="modal"
                    data-bs-target="#signInModal"
                  >
                    Sign in
                  </button>
                </div>
              </div>

              {/* Contact Us */}
              <div>
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <a className="nav-link active" href="/contact">
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
                <div>
                  {!sessionId && (
                    <Formik
                      initialValues={{ username: "", password: "" }}
                      validationSchema={LoginSchema}
                      onSubmit={handleLogin}
                    >
                      {({ isSubmitting, status }) => (
                        <Form>
                          {status && <div>{status}</div>}
                          <div className="d-flex flex-column mb-2">
                            <Field
                              type="username"
                              name="username"
                              placeholder="Username"
                            />
                          </div>
                          <div className="d-flex flex-column mb-2">
                            <ErrorMessage name="username" component="div" />
                            <Field
                              type="password"
                              name="password"
                              placeholder="Password"
                            />
                            <ErrorMessage name="password" component="div" />
                          </div>
                          <div>
                            <a
                              className="nav-link active"
                              aria-current="page"
                              href="/"
                            >
                              <button
                                type="submit"
                                disabled={isSubmitting}
                                className="btn btn-light mb-2"
                                style={{
                                  backgroundColor: "rgb(159, 100, 214)",
                                  color: "white",
                                  borderColor: "rgb(159, 100, 214)",
                                  width: "100%",
                                  display: "flex",
                                  justifyContent: "center",
                                  alignItems: "center",
                                }}
                              >
                                Login
                              </button>
                            </a>
                          </div>
                        </Form>
                      )}
                    </Formik>
                  )}
                  {sessionId && (
                    <div>
                      <ul>
                        {username && userId && (
                          <div>
                            Username: {username}
                            <br />
                            User ID: {userId}
                          </div>
                        )}
                      </ul>
                      <button
                        className="btn btn-secondary mb-2"
                        style={{
                          width: "100%",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                        onClick={handleLogout}
                      >
                        Logout
                      </button>
                    </div>
                  )}
                  {/* <h3>Login Success!</h3> */}
                </div>

                {/* <div className="d-flex flex-column">
                  <button
                    type="submit"
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
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
