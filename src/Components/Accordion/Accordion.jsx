import React, { Component } from "react";
import DashBoard from "../DashBoard/DashBoard";
class Accordion extends Component {
  state = {};
  render() {
    return (
      <ul data-uk-accordion="multiple: true">
        <li className="uk-open">
          <a className="uk-accordion-title" href="#">
            فعالیت ها به عنوان وکیل
          </a>
          <div className="uk-accordion-content">
            <DashBoard />
          </div>
        </li>
        <li>
          <a className="uk-accordion-title" href="#">
            فعالیت ها به عنوان موکل
          </a>
          <div className="uk-accordion-content">
            <DashBoard />
          </div>
        </li>
      </ul>
    );
  }
}

export default Accordion;

export  class AccordionItem extends Component {
    state = {  }
    render() { 
        return ( <div>pep</div> );
    }
}
 

