import React from "react";
import ReactDOM from "react-dom";

import App from "./components/app/app";
import {films} from "./mocks/films";
import promo from "./mocks/promo";

ReactDOM.render(
    <App
      promo = {promo}
      movies = {films}
    />,
    document.querySelector(`#root`)
);
