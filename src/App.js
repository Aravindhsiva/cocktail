import React, { Component } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import "font-awesome/css/font-awesome.min.css";

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
        <Form
          onChange={this.changeHandler}
          location={this.state.location}
          handleClick={this.handleClick}
        />
      </div>
    );
  }
}

export default App;
