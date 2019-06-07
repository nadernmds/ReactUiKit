import React, { Component } from "react";
import ChatBubble from "./ChatBubble";
import ContactItem from "./ContactItem";
class ChatScreen extends Component {
  state = {
    messages: [
      { message: "سلام", dir: "right" },
      { message: "سلام خوب هستین", dir: "left" },
      { message: "خیلی ممنون جناب وکیل وضیعت پرونده چطوره؟", dir: "right" },
      { message: "شکر خدا موفق شدیم برائت بگیریم", dir: "left" },
      { message: "عه شکر خدا خیلی خوشحال شدم", dir: "right" },
      { message: "واقعا ممنون", dir: "right" },
      {
        message: "خواهش می کنم سه شنبه واسه کار های بعدی تو دفتر باشین",
        dir: "left"
      },
      { message: "چشم", dir: "right" }
    ]
  };
  render() {
    return (
      <div>
                <div style={{ paddingTop: 50 }}>
          <ContactItem
            value={{
              name: "وحید محمودی",
              message: "",
              time: ""
            }}
          />
        </div>
        <div className="chatContainer">
          <div className="chats">
            {this.state.messages.map(message => (
              <ChatBubble dir={message.dir}>{message.message}</ChatBubble>
            ))}
          </div>
        </div>
        <div className="enterChat">
          <input type="text" placeholder="پیام خود را بنویسید" name="" id="" />
        </div>
      </div>
    );
  }
}

export default ChatScreen;
