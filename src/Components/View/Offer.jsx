import React, { Component,Fragment } from "react";
class Offer extends Component {
  state = {};
  render() {
    return (
      <Fragment>

     
      <div data-uk-grid>
        <div className="uk-width-auto">
          <input className="uk-checkbox" type="checkbox" name={this.props.name} id={this.props.name} />
        </div>
        <div className="uk-width-auto">
          <input
            className="uk-button uk-button-default"
            type="button"
            value={this.props.label}
          />
        </div>
        <div className="uk-width-2-3">
          <h5>{this.props.title}</h5>
          <p>{this.props.decription}</p>
        </div>
        <div className="uk-width-expand ">
          <p className="n-left "> {this.props.price} ریال</p>
        </div>
      </div> <hr/></Fragment>
    );
  }
}

export default Offer;
