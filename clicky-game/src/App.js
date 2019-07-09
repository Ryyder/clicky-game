import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Nav from "./components/Navbar";
import friends from "./friends.json";


class App extends Component {
  // Setting this.state.friends to the friends json array, highscore, currentscore, status, and clicked array
  state = {
    friends,
    highScore: 0,
    currentScore: 0,
    status: "",
    clicked: []
  };

  //our shuffle method...
  handleShuffle = () => {
    console.log("Shuffling cards");
    //use spread operator to no mutate original state data
    let copy = [...this.state.friends]
    //apply our shuffe to the copied object
    copy.sort(() => Math.random() - 0.5);
    //setState to the copy object
    this.setState({friends: copy});
  }

  //method to handle rendering our cards
  renderCards = () => {
    //map over the friends object and put this data in our friendcar
    return this.state.friends.map(friend => (
      <FriendCard
        id={friend.id}
        key={friend.id}
        image={friend.image}
        handleIncrement={this.handleIncrement}
        handleClick={this.handleClick}
        handleReset={this.handleReset}
      />
    ))
  }

  //handleIncrememnt method handles
  handleIncrement = () => {
    //save the value of the incremented score in scoreNow
    const scoreNow = this.state.currentScore + 1;
    //set the state of the currentScore to scoreNow
    this.setState({
      currentScore: scoreNow,
      status: ""
    });
    //if scoreNow is >= highScore, then set the high score to the scoreNow value
    if (scoreNow >= this.state.highScore) {
      this.setState({highScore: scoreNow});
    } else if (scoreNow === 12) {
      this.setState({status: "All 12 matched!!! You Win!!!"});
    }
  };

  //onclick, this should take in the id of the card.
  //if the id's are not equal, then call our increment method
  //else the game restarts
  handleClick = id => {
    //check if our clicked array contains any of the id's have not been clicked...so if not in our clicked array
    if (this.state.clicked.indexOf(id) === -1) {
      //increment our score
      this.handleIncrement();
      //add the id to the clicked array in our state object
      this.setState({clicked: this.state.clicked.concat(id)});
      this.handleShuffle();
    } 
    //if same id clicked twice, we reset the game board
    else { 
      this.handleReset();
    }
  };

  //need reset method....
  //reinitialize the game setstate{}......
  handleReset = () => {
    this.setState({
        currentScore: 0,
        highScore: this.state.highScore,
        status: "New Game!",
        clicked: []
      });
    this.handleShuffle();
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Nav 
        title = "Naruto Click Game"
        score = {this.state.currentScore}
        topScore = {this.state.highScore}
        status = {this.state.status}
        />
        <Title>Click on a Character! If you don't click on any duplicates twice in a row, your score goes up 1 point. Try to see how high you can score.</Title>
        {this.renderCards()}
      </Wrapper>
    );
  }
}

export default App;
