import React, { Component } from "react";

class BeyCard extends React.Component {

  handleClick = (event) => {
    const id = this.props.beyObj.id;
    this.props.setBeyImageState(id);
  }

  render() {
    return (
      <div>
        <h3>{this.props.beyObj.name}</h3>
        <img src={this.props.beyObj.img} onClick={this.handleClick}/>
      </div>
    );
  }
}

export default BeyCard;
