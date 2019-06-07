import React, { Component } from "react";
import "./Chat.css";

class ContactItem extends Component {

    state = {
    };

  render() {
    
      return (
        <div>
          <div className="chatItem">
            <div className="uk-height-match" data-uk-grid>
              <div className="uk-width-auto@m">
                <img
                  className="circleChatAvatar"
                  src="/images/avatar.png"
                  alt=""
                />
              </div>
              <div className="uk-width-expand@m">
                <div>
                  <div
                    className="uk-child-width-1-1@m uk-grid-collapse"
                    data-uk-grid
                  >
                    <div>
                      <h6>{this.props.value.name}</h6>
                    </div>
                    <div>
                      <span style={{ fontSize: "9px" }}>{this.props.value.message}</span>
                    </div>
                    <div className="n-left">
                      <span style={{ fontSize: "8px" }}>{this.props.value.time}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );

  }

}

export default ContactItem;
