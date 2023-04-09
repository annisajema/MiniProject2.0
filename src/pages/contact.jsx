import { useState } from "react";
import React from "react";
import ReactDOM from "react-dom/client";
// import "./App.css";
import Navbar from "../components/navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function Contact() {

  return (
    <div classNameName="App">

    <Navbar />

      <div className="form-contact text-light">
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
            style={{backgroundColor: "rgb(159, 100, 214)", borderColor: "rgb(159, 100, 214)"}}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default Contact;