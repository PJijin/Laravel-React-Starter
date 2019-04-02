import { createStore, compose } from "redux";
import { syncHistoryWithStore } from "react-redux-router";
import { browserHistory } from "react-router";

import rootReducer from "../reducers/index";

// Default State Data
const defaultState = {};

const store = createStore(rootReducer, defaultState);

export const history = syncHistoryWithStore(browserHistory, store);

if (module.hot) {
    module.hot.accept("../reducers/", () => {
        const nextRootReducer = require("../reducers/index").default;
        store.replaceReducer(nextRootReducer);
    });
}

export default store;
