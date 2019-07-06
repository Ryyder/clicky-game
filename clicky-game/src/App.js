import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Nav from "./components/Navbar";
import friends from "./friends.json";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends,
    highScore: 0,
    currentScore: 0,
    status: "",
    clicked: []
  };

  removeFriend = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const friends = this.state.friends.filter(friend => friend.id !== id);
    // Set this.state.friends equal to the new friends array
    this.setState({ friends });
  };

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
      this.setState({status: "All 12 matched!!!"});
    }
    this.handleShuffle();
  };

  //need method to randomly shuffle cards.....
  //onclick, this should take in the id of the card.
  //if the id's are not equal, then call our increment method
  //else the game restarts

  //

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Nav 
        title = "Naruto Click Game"
        topScore = {this.state.topScore}
        currentScore = {this.state.scoreNow}
        status = {this.state.status}
        />
        <Title>Clicky Game</Title>
        {this.state.friends.map(friend => (
          <FriendCard
            removeFriend={this.removeFriend}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
            occupation={friend.occupation}
            location={friend.location}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
