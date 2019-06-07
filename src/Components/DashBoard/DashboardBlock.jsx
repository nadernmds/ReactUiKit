import React, { Component } from "react";
import Icon from "../Icon/Icon";
import "./DashBoard.css";

class DashBoardBloack extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <div className="border padding">
          <div
            className="uk-child-width-1-2"
            style={{ marginLeft: 10, marginTop: 15 }}
            data-uk-grid
          >
            <div className="n-right">
              <h2>{this.props.count}</h2>
            </div>
            <div className="n-left">
              <Icon className="n-green" icon={this.props.icon + ";ratio:2"} />
            </div>
          </div>
          <p style={{ fontSize: 13 }}>{this.props.children}</p>
        </div>
      </div>
    );
  }
}

export default DashBoardBloack;
