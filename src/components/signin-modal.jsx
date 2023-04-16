function SigninModal() {
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
                  className="btn-close btn-close-signin-modal btn-close-white"
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
                          <div className="d-flex flex-column mb-2 m-1">
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
                        {username && userId && (
                          <div>
                            Username: {username}
                            <br />
                            User ID: {userId}
                          </div>
                        )}
                      </ul>
                      <button
                        className="btn btn-secondary mt-4 mb-3"
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