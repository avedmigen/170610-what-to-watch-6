import React from "react";
import ReactDOM from "react-dom";
import {createStore} from "redux";
import {Provider} from "react-redux";
import {composeWithDevTools} from "redux-devtools-extension";

import {reducer} from "./store/reducers/reducer";
import App from "./components/app/app";
import promo from "./mocks/promo";

const store = createStore(
    reducer,
    composeWithDevTools(),
);

ReactDOM.render(
    <Provider store={store}>
      <App
        promo = {promo}
      />
    </Provider>,
    document.querySelector(`#root`)
);

