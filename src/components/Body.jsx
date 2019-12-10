import React, { Component } from "react";
class Body extends Component {
  constructor(props) {
    super(props);
  }
  getWeather = () => {
    const { location } = this.props;
    if (location !== "") {
      console.log(location);
    } else {
      console.log("Location Empty");
    }
  };
  render() {
    return (
      <div className="jumbotron bg-dark text-white mt-4">
        <h1>Body{this.props.handleClick("Hi From Body")}</h1>
      </div>
    );
  }
}

export default Body;
