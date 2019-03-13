import React from "react";
import BeyCard from "./BeyCard"
import BeyContainer from "./BeyContainer";
import Favorites from "./Favorites";

class SlayContainer extends React.Component {

  state = {
    beyImages: []
  };

  setIndexBeyState = (id) => {
    let newArray = [...this.state.beyImages]
    newArray.find(beyObj => beyObj.id === id).favorite = true
    
    this.setState({
      beyImages: newArray
    })
  }

  setFaveBeyState = (id) => {
    let newArray = [...this.state.beyImages]
    newArray.find(beyObj => beyObj.id === id).favorite = false
    
    this.setState({
      beyImages: newArray
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
  
  render() {
    const beyCardsArr = this.state.beyImages.map(beyImage => <BeyCard key={beyImage.id} beyObj={beyImage} setBeyImageState={this.setIndexBeyState}  />)
    const faveBey = this.state.beyImages.filter(beyCard => beyCard.favorite === true)
    const faveBeyArr = faveBey.map(beyImage=> <BeyCard key={beyImage.id} beyObj={beyImage} setBeyImageState={this.setFaveBeyState} />)

    return (
      <div className="container">
        <BeyContainer beyObjArr={beyCardsArr} />
        <Favorites faveBeyArr={faveBeyArr} />
      </div>
    )
  }
}

export default SlayContainer;
