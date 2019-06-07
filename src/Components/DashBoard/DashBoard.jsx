import React, { Component } from "react";
import "./DashBoard.css";

import DashBoardBloack from "./DashboardBlock";
class DashBoard extends Component {
  state = {
    item: [100, 20, 150, 960, 1550]
  };
  render() {
    return (
      <div className="uk-grid-small uk-child-width-1-3@s " data-uk-grid>
        {this.state.item.map(c => (
          <DashBoardBloack icon="world" count={c}>
            پرونده های پیشنهادی به شما
            <a href="pep">ارتقاء عضویت</a>
          </DashBoardBloack>
        ))}
      </div>
    );
  }
}

export default DashBoard;
