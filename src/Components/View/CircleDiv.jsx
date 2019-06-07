import React, { Component } from 'react';
import './View.css';
class CircleDiv extends Component {
    state = {  }
    
    render() { 

        return ( <div className="circleDiv">{this.props.number}</div>  );
    }
}
 
export default CircleDiv;