import React, { Component } from "react";
import "./EqualsButton.css";

class EqualsButton extends Component {
  render() {
    return( 
      <div 
        className="clear-btn"
        onClick={() => this.props.handleClick()}
      >
        {this.props.children}
      </div>
    )
  }
}

export default EqualsButton;