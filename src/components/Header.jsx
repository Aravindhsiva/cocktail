import React from "react";

const Header = () => {
  const styles = {
    margin: "10px auto"
  };
  return (
    <div
      className="card col-lg-4 col-sm-12 p-2 bg-primary text-center text-white"
      style={styles}
    >
      <h3>
        <span role="img" aria-label="cocktailImg">
          🍸
        </span>
        Random Cocktail App
        <span role="img" aria-label="cocktailImg">
          🍸
        </span>
      </h3>
    </div>
  );
};

export default Header;
