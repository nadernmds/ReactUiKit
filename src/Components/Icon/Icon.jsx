import React, { Component } from 'react';
class Icon extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <span className={this.props.className} uk-icon={"icon: "+this.props.icon}></span> );
    }
}
 
export default Icon;