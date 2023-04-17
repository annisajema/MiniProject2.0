import { useEffect, useState } from "react";
import axios from "axios";
import { useFormik, Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const BASE_URL = "https://api.themoviedb.org/3";
const api_key = "cb2df51ab2003cdd9a5aa36d34347215";
const avatar_hash =
  "https://image.tmdb.org/t/p/w45/nq91MCGHrEb2b0hLQhxtxdE8cTF.jpg";
const url = axios.create({ baseURL: BASE_URL });
const getImage = (path) => `https://image.tmdb.org/t/p/original/${path}`;
const getToken = url.get("authentication/token/new", { params: { api_key } });
// const getAuth = url.post("authentication/token/validate_with_login", { params: { api_key }});

const LoginSchema = Yup.object().shape({
  username: Yup.string().required("Required"),
  password: Yup.string().required("Required"),
});

function SigninModal() {
  const [sessionId, setSessionId] = useState(localStorage.getItem("sessionId"));
  const [detail, setDetail] = useState("");
  const [username, setUsername] = useState("");
  const [userId, setUserId] = useState("");
  const [avatar, setAvatar] = useState("");

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
    localStorage.removeItem("sessionId", sessionId);
  };

  useEffect(() => {
    const fetchData = async () => {
      if (sessionId) {
        const response = await url.get("account", {
          params: {
            api_key: api_key,
            session_id: sessionId,
          },
        });
        setUsername(response.data.username);
        setUserId(response.data.id);
        setAvatar(response.data.avatar);
      }
    };
    fetchData();
  }, [sessionId]);
  return (
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
              className="btn-close btn-close-signin-modal btn-close-white float-end"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
            <div className="mt-5 mb-4 text-light signin-text">Sign in</div>
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
                      <div className="d-flex flex-column mt-5 mb-2 m-1">
                        Username
                        <Field
                          type="username"
                          name="username"
                          placeholder="Username"
                        />
                        <ErrorMessage
                          name="username"
                          component="div"
                          style={{ color: "red" }}
                        />
                      </div>
                      Password
                      <div className="d-flex flex-column mb-4 m-1">
                        <Field
                          type="password"
                          name="password"
                          placeholder="Password"
                        />
                        <ErrorMessage
                          name="password"
                          component="div"
                          style={{ color: "red" }}
                        />
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
                <div className="mt-4">
                  <ul>
                    {username && userId && avatar && (
                      <div className="d-flex justify-content-center align-items-center mt-5">
                        <img
                          className="me-3 rounded-2 h-50"
                          src={avatar_hash}
                        />
                        Username: {username}
                        <br />
                        User ID: {userId}
                      </div>
                    )}
                  </ul>
                  <button
                    className="btn btn-secondary mt-5 mb-3"
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SigninModal;
