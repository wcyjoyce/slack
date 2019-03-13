import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import Message from "../components/message.jsx";
import Form from "../containers/form.jsx";

import { fetchMessages } from "../actions";

class Messages extends Component {
  componentWillMount() {
    this.fetchMessages();
  }

  componentDidMount() {
    this.refresher = setInterval(this.fetchMessages, 5000); // refreshing every 5 seconds
  }

  componentDidUpdate() {
    this.list.scrollTop = this.list.scrollHeight;
  }

  componentWillUnmount() {
    clearInterval(this.refresher);
  }

  fetchMessages = () => {
    this.props.fetchMessages(this.props.selectedChannel);
  }

  render() {
    return (
      <div className="channel">
        <h1>#{this.props.selectedChannel}</h1>
        <div className="messages" ref={(list) => {this.list = list;}}>
          {this.props.messages.map((message) => <Message key={message.id} message={message} />)}
        </div>
        <Form />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchMessages: fetchMessages }, dispatch);
}

function mapStateToProps(state) {
  return {
    messages: state.messages,
    selectedChannel: state.selectedChannel
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Messages);
