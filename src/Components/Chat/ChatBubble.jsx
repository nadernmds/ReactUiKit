import React, { Component } from "react";
import "./Chat.css";
class ChatBubble extends Component {
  state = {};
  render() {
    return (
      <div className={"chat-bubble-"+this.props.dir}>
        <p>

          {this.props.children}
        </p>
      </div>
    );
  }
}

export default ChatBubble;
