import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import fitnessReducer from "./fitnessReducer";

const store = createStore(fitnessReducer, applyMiddleware(thunk));

export default store;
