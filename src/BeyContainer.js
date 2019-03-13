import React from "react";

class BeyContainer extends React.Component {
  render() {
    return (
      <div className="index">
        <h1>Index</h1>
        {this.props.beyObjArr}
      </div>
    );
  }
}

export default BeyContainer;
