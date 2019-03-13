import React from "react";

import Channels from "../containers/channels.jsx";
import Messages from "../containers/messages.jsx";

const NavBar = () => {
  return (
    <div className="navbar-wrapper">
      <img src={`https://raw.githubusercontent.com/lewagon/www-images/master/logo-square.png`} />
    </div>
  );
}

const App = () => {
  return (
    <div className="app">
      <NavBar />
      <Channels />
      <Messages />
    </div>
  );
};

export default App;
