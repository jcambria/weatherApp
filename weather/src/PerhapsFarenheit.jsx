import React from "react";

function PerhapsFarenheit({ weather, farenheit }) {

  if (farenheit) {
    const converted =  Math.round((weather.main.temp * 9) / 5 + 32)
    return (
      <div className="city-temp">
        {converted}

        <sup>&deg; F</sup>
      </div>
    );
  } else {
    return <div></div>;
  }
}

export default PerhapsFarenheit;
