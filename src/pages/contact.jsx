import React from "react";
import Navbar from "../components/navbar";

function Contact() {

  return (
    <div classNameName="App">
      <Navbar />
      <div className="container">
        <div className="form-contact">
          <h1 className="mb-3">Contact Us</h1>
          <div className="mb-3">
            <label for="exampleFormControlInput1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
            />
          </div>
          <div className="mb-3">
            <label for="exampleFormControlInput1" className="form-label">
              Name
            </label>
            <input
              className="form-control"
              type="text"
              placeholder="Name"
              aria-label="default input example"
            />
          </div>
          <div className="mb-3">
            <label for="exampleFormControlTextarea1" className="form-label">
              Feedback
            </label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              placeholder="Write your feedback here"
              rows="3"
            ></textarea>
          </div>
          <div className="col-auto">
            <button
              type="submit"
              className="btn btn-primary mb-3"
              style={{
                backgroundColor: "rgb(159, 100, 214)",
                borderColor: "rgb(159, 100, 214)",
              }}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
