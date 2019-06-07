import React, { Component } from "react";
import "./NavBar.css";
import ContactItem from "../Chat/ContactItem";
import ChatList from "../Chat/ChatList";
import ChatScreen from "../Chat/ChatScreen";
class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <nav className="uk-navbar-container " data-uk-navbar>
          <div className="uk-navbar-right">
            <ul className="uk-navbar-nav uk-margin-right">
              <li>
                <img src="/images/avatar.png" className="avatar" alt="" />
              </li>
              <li className="uk-margin-right">nadernmds</li>
              <li>
                <span uk-icon="icon: chevron-down" />
              </li>
              <li>
                <span uk-icon="icon: search" />
              </li>
            </ul>
          </div>
          <div className="uk-navbar-center">
            <ul className="uk-navbar-nav">
              <li>
                <img src="/images/logo.png" className="logo" alt="" />
              </li>
            </ul>
          </div>
          <div className="uk-navbar-left">
            <ul className="uk-navbar-nav">
              <li>
                <a
                  href="!#"
                  uk-icon="icon: plus"
                  data-uk-toggle="target: #createCanvas"
                />
              </li>
              <li>
                <a href="#" uk-icon="icon: world" />
              </li>
              <li>
                <a
                  href="!#"
                  data-uk-toggle="target: #chat"
                  uk-icon="icon: comment"
                />
              </li>
            </ul>
          </div>
        </nav>
        <div id="createCanvas" uk-offcanvas="mode:push;flip:true">
          <div
            className="uk-offcanvas-bar"
            style={{ backgroundColor: "#669900", color: "white" }}
          >
            <button
              className="uk-offcanvas-close"
              type="button"
              data-uk-close
            />
            <h3>ایجاد پرونده جدید</h3>
            <p>پرونده خود را با هزاران مشاور و وکیل در میان بگذارید</p>
            <button className="uk-button uk-button-default uk-width-1-1">
              شروع
            </button>
          </div>
        </div>
        <div id="chat" uk-offcanvas="mode:push;flip:true">
          <div
            className="uk-offcanvas-bar"
            style={{ backgroundColor: "white", color: "gray", padding: 0 }}
          >
            <button
              className="uk-offcanvas-close"
              type="button"
              data-uk-close
            />

            <ChatScreen />

          </div>
        </div>
      </div>
    );
  }
}

export default NavBar;
