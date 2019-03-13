import React from "react";
import BeyCard from "../Components/BeyCard"

class BeyContainer extends React.Component {
  state = {
    beyImages: []
  };

  setBeyContainerState = (id) => {
    const tmpArr = this.state.beyImages.filter(obj => obj.id !== id)
    this.setState({
      beyImages: tmpArr
    })
  }

  componentDidMount = () => {
    fetch('http://localhost:3001/beys').then(resp => resp.json())
      .then(json => {
        this.setState({
          beyImages: json
        })
      })
  }

  logSomething = () => {
    return "Hi";
  }
  

  render() {
    const beyCardsArr = this.state.beyImages.map(beyImage => <BeyCard key={beyImage.id} beyObj={beyImage} setParentState={this.setBeyContainerState} parent={this}/>)

    return (
      <div className="index">
        {this.state.beyImages.length > 0 && beyCardsArr}
      </div>
    );
  }
}

export default BeyContainer;
