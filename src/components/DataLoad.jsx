import React from "react";
const DataLoad = props => {
  let { cocktailData } = props;
  const styles = {
    height: "100px",
    width: "100px"
  };
  return (
    <div className="card p-4 bg-dark mt-4">
      <div className="row">
        <div className="col-2 m-3 p-2">
          <img
            className="card p-2 rounded"
            src={cocktailData.strDrinkThumb}
            alt="Cocktail"
            style={styles}
          />
        </div>
        <div className="col m-3 p-2 card">
          <h3>Name : </h3>
          <h2>{cocktailData.strDrink}</h2>
        </div>
      </div>
      <div className="row">
        <div className="col m-1 p-2 card">
          <h5>Category : </h5>
          {cocktailData.strCategory}
        </div>
        <div className="col m-1 p-2 card">
          <h5>Is Alcoholic : </h5>
          {cocktailData.strAlcoholic}
        </div>
        <div className="col m-1 p-2 card">
          <h5>Glass Used : </h5>
          {cocktailData.strGlass}
        </div>
      </div>
      <div className="row">
        <div className="col m-1 p-2 card">
          <h5>Instructions : </h5>
          {cocktailData.strInstructions}
        </div>
      </div>
      <div className="row">
        <div className="col m-1 mt-3 p-2 card text-center">
          <h5>Ingredients</h5>
        </div>
      </div>
      <div className="row">
        {cocktailData.IngredientArray.map(ingredient => (
          <div className="col m-1 p-2 card" key={ingredient.item}>
            <h5>{ingredient.item} : </h5>
            {ingredient.amount}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DataLoad;
