import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import dataReducer from "./dataReducer";

const rootReducer = combineReducers({
  data: dataReducer,
});

let enhancer;

if (process.env.NODE_ENV !== "production") {
  const logger = require("redux-logger").default;
  const composeEnhancers =
    typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ trace: true })
      : compose;
  enhancer = composeEnhancers(applyMiddleware(logger));
}

const configureStore = (preloadedState) => {
  return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;
