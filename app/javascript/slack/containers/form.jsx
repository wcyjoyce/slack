import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { createMessage } from "../actions";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" }
  }

  componentDidMount() {
    this.messageBox.focus();
  }

  handleChange = (event) => {
    this.setState({ value: event.target.value })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.createMessage(this.props.selectedChannel, this.props.currentUser, this.state.value);
    this.setState({ value: "" }) // resets message input
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          ref={(input) => {this.messageBox = input;}}
          type="text"
          className="form-control"
          autoComplete="off"
          placeholder={`Message #${this.props.selectedChannel}`}
          value={this.state.value}
          onChange={this.handleChange}
        />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ createMessage: createMessage }, dispatch);
}

function mapStateToProps(state) {
  return { currentUser: state.currentUser };
}

export default connect(mapStateToProps, mapDispatchToProps)(Form);
