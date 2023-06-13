import { useEffect, useState } from "react";
import SigninModal from "./signin-modal";

const BASE_URL = "https://api.themoviedb.org/3";
const api_key = "cb2df51ab2003cdd9a5aa36d34347215";

function Navbar () {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <div className={`App ${theme}`}>
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
                        href="/movies-playing"
                      >
                        Now Playing
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item text-light dropdown-menu-dark"
                        href="/movies-popular"
                      >
                        Popular
                      </a>
                    </li>
                    {/* <li>
                      <a
                        className="dropdown-item text-light dropdown-menu-dark"
                        href="movies(romance).html"
                      >
                        Romance
                      </a>
                    </li> */}
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link active"
                    href="movie.html"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Series
                  </a>
                  <ul
                    className="dropdown-menu w-auto h-auto"
                    style={{ backgroundColor: "rgb(13, 13, 13)" }}
                  >
                    <li>
                      <a
                        className="dropdown-item text-light dropdown-menu-dark"
                        href="/series-popular"
                      >
                        Popular
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>

              {/* Sign In */}
              <div>
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <div
                      className="nav-link active"
                      data-bs-toggle="modal"
                      data-bs-target="#signInModal"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        className="bi bi-person-circle"
                        viewBox="0 0 16 16"
                      >
                        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                        <path
                          fillRule="evenodd"
                          d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
                        />
                      </svg>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Contact Us */}
              <div>
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <a className="nav-link active" href="/contact">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        className="bi bi-question-circle"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                        <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z" />
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>

              {/* Dark Mode */}
              <div className="form-check form-switch" onClick={toggleTheme}>
                <input
                  className="navbar-nav form-check-input"
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckDefault"
                />
              </div>
             
            </div>
          </div>
        </nav>

        
        <SigninModal />
      </div>
    </div>
  );
};

export default Navbar;
