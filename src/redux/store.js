import { createStore, applyMiddleware } from "redux";
import promiseMiddleware from "redux-promise-middleware";
import productReducer from "./ducks/productReducer";

const middleware = applyMiddleware(promiseMiddleware);
const store = createStore(productReducer, middleware);

export default store;
