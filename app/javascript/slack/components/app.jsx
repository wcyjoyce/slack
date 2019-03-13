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

const App = (props) => {
  return (
    <div className="app">
      <NavBar />
      <Channels channelFromParams={props.match.params.channel} />
      <Messages channelFromParams={props.match.params.channel} />
    </div>
  );
};

export default App;
