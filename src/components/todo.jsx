import React, { Component } from "react";
class ToDo extends Component {
  state = {
    checked: true
  };

  edit() {
    alert("Editing task");
  }

  remove() {
    alert("Removing task");
  }

  //note to self
  //when changing a state, use arrow funcitons
  handleChecked = () => {
    this.setState({ checked: !this.state.checked });
  };

  //function to render components
  render() {
    let msg = "";
    if (this.state.checked) {
      msg = "checked";
    } else {
      msg = "unchecked";
    }
    return (
      <div className="taskContainer">
        <h1>{this.props.title}</h1>
        <h2>{this.props.genre}</h2>
        <button className="btn btn-primary" onClick={this.edit}>
          Edit
        </button>
        <button className="btn btn-danger" onClick={this.remove}>
          Delete
        </button>
        <input
          type="checkbox"
          onChange={this.handleChecked}
          defaultChecked={this.state.checked}
        />{" "}
        <h3>checkbox is {msg}</h3>
      </div>
    );
  }
}

export default ToDo;
