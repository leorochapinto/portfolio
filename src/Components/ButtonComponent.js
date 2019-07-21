import React, { Component } from "react";

class ButtonComponent extends Component {
  render() {
    return (
      <button type="button" class="btn btn-light">
        {this.props.children}
      </button>
    );
  }
}
export default ButtonComponent;
