import React from "react";
const DataLoad = props => {
  let { cocktailData } = props;
  const styles = {
    height: "100px",
    width: "100px"
  };
  return (
    <div className="card p-4 bg-dark mt-4">
      <div className="row d-flex">
        <div className="p-2">
          <img
            className="card p-2 rounded"
            src={cocktailData.strDrinkThumb}
            alt="Cocktail"
            style={styles}
          />
        </div>
        <div className="flex-grow-1 p-3 card">
          <h4>Name : </h4>
          <h3>{cocktailData.strDrink}</h3>
        </div>
      </div>
      <div className="row mt-1 d-flex">
        <div className="flex-fill m-1 p-2 card">
          <h5>Category : </h5>
          {cocktailData.strCategory}
        </div>
        <div className="flex-fill m-1 p-2 card">
          <h5>Is Alcoholic : </h5>
          {cocktailData.strAlcoholic}
        </div>
        <div className="flex-fill m-1 p-2 card">
          <h5>Glass Used : </h5>
          {cocktailData.strGlass}
        </div>
      </div>
      <div className="row d-flex">
        <div className="flex-grow-1 p-2 card">
          <h5>Instructions : </h5>
          {cocktailData.strInstructions}
        </div>
      </div>
      <div className="row d-flex">
        <div className="flex-grow-1 mt-3 mb-1 p-2 card text-center">
          <h5>Ingredients</h5>
        </div>
      </div>
      <div className="row d-flex">
        {cocktailData.IngredientArray.map(ingredient => (
          <div className="m-1 p-2 card flex-fill" key={ingredient.item}>
            <h5>{ingredient.item} : </h5>
            {ingredient.amount}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DataLoad;
