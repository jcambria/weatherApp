import React from "react";

function CityNameHeader({weather}) {
  return (
    <h2 className="city-name">
      <span>{weather.name} </span>
      <sup>{weather.sys.country}</sup>
    </h2>
  );
}

export default CityNameHeader;
