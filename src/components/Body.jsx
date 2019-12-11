import React, { Component } from "react";
import DataLoad from "./DataLoad";
import loaderImage from "../../src/assets/loader.gif";
import _ from "lodash";

class Body extends Component {
  state = {
    cocktailData: null,
    isLoading: false
  };

  getData = () => {
    this.setState({ isLoading: true });
    const url = `https://www.thecocktaildb.com/api/json/v1/1/random.php`;
    fetch(url)
      .then(res => res.json())
      .then(data => {
        data = data["drinks"][0];
        const IngredientArray = this.formatIngredients(data);
        data.IngredientArray = IngredientArray;
        this.setState({ cocktailData: data, isLoading: false });
      });
  };
  formatIngredients = data => {
    let IngredientArray = [];
    _.forOwn(data, function(value, key) {
      const ing = {
        id: "",
        item: "",
        amount: ""
      };
      if (key.includes("strIngredient") && value !== null) {
        ing.id = key.substring(13, key.length);
        ing.item = value;
        IngredientArray.push(ing);
      }
    });
    _.forOwn(data, function(value, key) {
      if (key.includes("strMeasure") && value !== null) {
        const i = key.substring(10, key.length);
        const index = _.findIndex(IngredientArray, {
          id: i
        });
        const temp = IngredientArray[index].item;
        const val = value.trim();
        IngredientArray.splice(index, 1, { item: temp, amount: val });
      }
    });
    return IngredientArray;
  };

  render() {
    const { cocktailData } = this.state;
    const styles = {
      height: "300px",
      width: "400px",
      marginLeft: "25%"
    };
    return (
      <div className="container w-75">
        <div className="card p-1 col-3 jumbotron m-auto">
          <button
            onClick={this.getData}
            className="btn btn-sm m-auto col-12 btn-warning font-weight-bold"
          >
            Get one
            <span role="img" aria-label="cocktailImg">
              🍹
            </span>
          </button>
        </div>
        {cocktailData !== null ? (
          <DataLoad cocktailData={cocktailData} />
        ) : (
          <div>
            <img
              alt="loader"
              src={loaderImage}
              style={styles}
              hidden={!this.state.isLoading}
            />
          </div>
        )}
      </div>
    );
  }
}

export default Body;
