import React, { Component } from "react";
import './Button.css';
class Button extends Component {
  state = {};
  render() {
    return (

      <button  onClick={this.props.onClick} className={"btn uk-button uk-button-" + this.props.value}>
        {this.props.children + " " + this.props.name}
      </button>
    );

  }


}

export default Button;
