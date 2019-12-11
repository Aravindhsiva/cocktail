import React, { Component } from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import "font-awesome/css/font-awesome.min.css";
import "./App.css";

class App extends Component {
  state = {
    location: ""
  };
  changeHandler = event => {
    this.setState({
      location: event.target.value
    });
  };
  handleClick = data => {
    console.log(data);
  };
  render() {
    return (
      <div className="container">
        <Header />
        <Body
          onChange={this.changeHandler}
          location={this.state.location}
          handleClick={this.handleClick}
        />
      </div>
    );
  }
}

export default App;
