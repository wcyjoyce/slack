import React, { Component } from "react";
import { emojify } from "react-emojione";

class Message extends Component {
  colourise = (author) => {
    let hash = 0;
    for (let i = 0; i < author.length; i += 1) {
      hash = author.charCodeAt(i) + ((hash << 5) - hash);
    }
    const c = (hash & 0x00FFFFFF)
      .toString(16)
      .toUpperCase();
    return `#${"00000".substring(0, 6 - c.length)}${c}`;
  }

  render() {
    const { author, content, created_at } = this.props.message;
    const date = new Date(created_at).toDateString()
    const time = new Date(created_at).toLocaleTimeString()
    const style = { color: this.colourise(author) }

    return (
      <div className="message">
        <div className="message-header">
          <div className="message-author" style={style}>{author}</div>
          <div className="message-datetime">{date} {time}</div>
        </div>
        <div className="message-content"> {emojify(content)}</div>
      </div>
    );
  }
}

export default Message;
