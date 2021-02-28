import React from "react";
import ReactDOM from "react-dom";

import App from "./components/app/app";
import {movies} from "./mocks/movies";
import promo from "./mocks/promo";

ReactDOM.render(
    <App
      promo = {promo}
      movies = {movies}
    />,
    document.querySelector(`#root`)
);
