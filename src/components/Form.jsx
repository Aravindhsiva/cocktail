import React, { Component } from "react";
import "../App.css";
class Form extends Component {
  state = {
    locationData: null
  };

  getWeather = () => {
    const { location } = this.props;
    if (location !== "") {
      const url = `http://api.weatherstack.com/current?access_key=2ab63a0ce240fa6b0113e5c514314e39&query=${location}`;
      fetch(url)
        .then(res => res.json())
        .then(data => {
          console.log(data);
          this.setState({ locationData: data });
        });
    } else {
      console.log("Location Empty");
    }
  };
  render() {
    return (
      <div className="container w-50">
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            defaultValue={this.props.location}
            onChange={this.props.onChange}
            onKeyPress={event => {
              if (event.key === "Enter") {
                this.props.onChange(event);
              }
            }}
          />
          <div className="input-group-append">
            <button
              className="btn btn-outline-secondary"
              onClick={this.getWeather}
              type="button"
            >
              <i className="fa fa-search"></i>
            </button>
          </div>
        </div>
        {this.state.locationData === null ? null : (
          <div className="card p-4 bg-dark mt-4">
            <div className="row">
              <div className="col-2 m-3 p-2 card">
                <img
                  className="rounded"
                  src={this.state.locationData.current.weather_icons}
                />
              </div>
              <div className="col m-3 p-2 card">
                <h3>City : </h3>
                {this.state.locationData.location.name}
              </div>
            </div>
            <div className="row">
              <div className="col m-1 p-2 card">
                <h3>Lat : </h3>
                {this.state.locationData.location.lat}
              </div>
              <div className="col m-1 p-2 card">
                <h3>Long : </h3>
                {this.state.locationData.location.lon}
              </div>
              <div className="col m-1 p-2 card">
                <h3>Country : </h3>
                {this.state.locationData.location.country}
              </div>
            </div>
            <div className="row">
              <div className="col m-1 p-2 card">
                <h3>Time : </h3>
                {this.state.locationData.current.observation_time}
              </div>
              <div className="col m-1 p-2 card">
                <h3>Temperature : </h3>
                {this.state.locationData.current.temperature}° C
              </div>
            </div>
            <div className="row">
              <div className="col m-1 p-2 card">
                <h3>Wind Direction : </h3>
                {this.state.locationData.current.wind_dir}
              </div>
              <div className="col m-1 p-2 card">
                <h3>Wind Degree : </h3>
                {this.state.locationData.current.wind_degree}
              </div>
            </div>
            <div className="row">
              <div className="col m-1 p-2 card">
                <h3>Pressure : </h3>
                {this.state.locationData.current.pressure}
              </div>
              <div className="col m-1 p-2 card">
                <h3>Humidity : </h3>
                {this.state.locationData.current.humidity}
              </div>
            </div>
            <div className="row">
              <div className="col m-1 p-2 card">
                <h3>UV Index : </h3>
                {this.state.locationData.current.uv_index}
              </div>
              <div className="col m-1 p-2 card">
                <h3>Overall : </h3>
                {this.state.locationData.current.weather_descriptions[0]}
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Form;
