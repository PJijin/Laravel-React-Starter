import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";

// Import reducers
import example from "./ExampleReducer";

const rootReducer = { example, routing: routerReducer };

export default rootReducer;
