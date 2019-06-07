import React, { Component } from "react";
import ContactItem from "./ContactItem";
class ChatList extends Component {
  state = {
    chats: [
      {
        name: "نادر محمودی",
        message: "پرونده من چی شد؟؟",
        time: "دو ساعت پیش"
      },
      {
        name: "نادر محمودی",
        message: "پرونده من چی شد؟؟",
        time: "دو ساعت پیش"
      },
      { name: "قلی محمودی", message: "پرونده من چی شد؟؟", time: "دو ساعت پیش" },
      {
        name: "رحیم محمودی",
        message: "پرونده من چی شد؟؟",
        time: "دو ساعت پیش"
      },
      {
        name: "صابر محمودی",
        message: "پرونده من چی شد؟؟",
        time: "دو ساعت پیش"
      },
      { name: "وحید محمودی", message: "پرونده من چی شد؟؟", time: "دو ساعت پیش" }
    ]
  };
  render() {
    return (
      <div>
        {this.state.chats.map(c => (
          <ContactItem value={c} />
        ))}
      </div>
    );
  }
}

export default ChatList;
