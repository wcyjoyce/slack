import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { fetchMessages, selectChannel } from "../actions";

class Channels extends Component {
  componentWillReceiveProps(nextProps) {
    if (nextProps.selectedChannel !== this.props.selectedChannel) {
      this.props.fetchMessages(nextProps.selectedChannel);
    }
  }

  handleClick = (channel) => {
    this.props.selectChannel(channel);
  }

  renderChannel = (channel) => {
    return (
      <li
        key={channel}
        className={channel === this.props.selectedChannel ? "selected" : null}
        onClick={() => this.handleClick(channel)}
      >
        #{channel}
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
  return bindActionCreators( { selectChannel: selectChannel, fetchMessages: fetchMessages }, dispatch);
}

function mapStateToProps(state) {
  return {
    channels: state.channels,
    selectedChannel: state.selectedChannel
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Channels);
