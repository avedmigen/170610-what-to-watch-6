import React from "react";
import ReactDOM from "react-dom";

import App from "./components/app/app";
import movies from "./mock/movies";
import promo from "./mock/promo";

ReactDOM.render(
    <App
      promo = {promo}
      movies = {movies}
    />,
    document.querySelector(`#root`)
);
