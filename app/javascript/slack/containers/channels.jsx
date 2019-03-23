import React, { Component } from "react";
import { Link } from "react-router-dom";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { selectChannel, fetchMessages } from "../actions";

class Channels extends Component {
  // componentWillReceiveProps(nextProps) {
  //   if (nextProps.selectedChannel !== this.props.selectedChannel) {
  //     this.props.fetchMessages(nextProps.selectedChannel);
  //   }
  // }

  handleClick = (channel) => {
    this.props.selectChannel();
    this.props.fetchMessages(channel);
  }

  renderChannel = (channel) => {
    return (
      <li
        key={channel}
        className={channel === this.props.selectedChannel ? "selected" : null}
        onClick={() => this.handleClick(channel)}
      >
        <Link to={`/channels/${channel}`}>
          #{channel}
        </Link>
      </li>
    );
  }

  render() {
    return (
      <div className="channels">
        <h1>Channels</h1>
        <ul>{this.props.channels.map(this.renderChannel)}</ul>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators( { fetchMessages: fetchMessages, selectChannel: selectChannel }, dispatch);
}

function mapStateToProps(state) {
  return { channels: state.channels };
}

export default connect(mapStateToProps, mapDispatchToProps)(Channels);
