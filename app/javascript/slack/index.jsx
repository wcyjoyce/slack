import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { logger } from "redux-logger";
import reduxPromise from "redux-promise";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import App from "./components/app";
import messagesReducer from "./reducers/messages_reducer.js";

const initialState = {
  messages: [],
  // channels: ["general", "react", "london"],
  channels: JSON.parse(chatContainer.dataset.channels).map(channel => channel.name)
  // currentUser: "Joyce"
};

const reducers = combineReducers({
  messages: messagesReducer,
  channels: (state = null, action) => state
});

const middlewares = applyMiddleware(reduxPromise, logger);
const store = createStore(reducers, initialState, middlewares);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path="/channels/:channel" component={App} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  // document.getElementById("root")
  document.getElementById("chat_app")
);
