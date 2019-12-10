import React from "react";

const Header = () => {
  const styles = {
    margin: "10px auto"
  };
  return (
    <div
      className="card p-2 w-50 bg-primary text-center text-white"
      style={styles}
    >
      <h3>Weather App</h3>
    </div>
  );
};

export default Header;
