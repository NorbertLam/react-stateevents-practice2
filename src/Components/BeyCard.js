import React, { Component } from "react";

class BeyCard extends React.Component {

  handleClick = (event) => {
    console.log(this)
    const id = this.props.beyObj.id;
    this.props.setParentState(id);
  }

  test = () => {
    console.log(this.props.parent.logSomething());
  }

  render() {
    return (
      <div>
        <h3>{this.props.beyObj.name}</h3>
        <img src={this.props.beyObj.img} onClick={this.test}/>
      </div>
    );
  }
}

export default BeyCard;
