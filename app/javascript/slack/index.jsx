import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { logger } from "redux-logger";
import reduxPromise from "redux-promise";

import App from "./components/app";

import messagesReducer from "./reducers/messages_reducer.js";
import selectedChannelReducer from "./reducers/selected_channel_reducer.js";

const identityReducer = (state = null) => state;

const initialState = {
  messages: [],
  channels: ["general", "react", "london"],
  currentUser: "Joyce",
  // currentUser: prompt("What is your username?") || `anonymous${Math.floor(10 + (Math.random() * 90))}`,
  selectedChannel: "general"
};

const reducers = combineReducers({
  messages: messagesReducer,
  channels: identityReducer,
  currentUser: identityReducer,
  selectedChannel: selectedChannelReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middlewares = composeEnhancers(applyMiddleware(reduxPromise, logger));

ReactDOM.render(
  <Provider store={createStore(reducers, initialState, middlewares)}>
    <App />
  </Provider>,
  document.getElementById("root")
);
