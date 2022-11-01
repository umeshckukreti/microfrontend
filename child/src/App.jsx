import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "home/styles";
import Header from "home/Header";
import ErrorBoundary from "./ErrorBoundary";
import { BrowserRouter } from "react-router-dom";
import axios from "axios";

import { add } from "home/utility";

const App = () => {
  const [sum, setSum] = useState(0);
  const [data, setData] = useState({});

  const getData = () => {
    const post = Math.floor(Math.random() * 10) + 1;

    axios
      .get("https://jsonplaceholder.typicode.com/todos/" + post)
      .then((res) => {
        console.log(res);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <BrowserRouter>
      <div className="">
        <ErrorBoundary>
          <Header />
        </ErrorBoundary>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {data.title}
          <button
            style={{ padding: "0.5rem", paddingInline: "2rem" }}
            onClick={() => {
              setSum(add(sum, 20));
            }}
          >
            Add
          </button>
          <span
            style={{
              padding: "0.5rem",
              paddingInline: "2rem",
              fontSize: "40px",
            }}
          >
            {sum}
          </span>
        </div>
      </div>
    </BrowserRouter>
  );
};
ReactDOM.render(<App />, document.getElementById("app"));
