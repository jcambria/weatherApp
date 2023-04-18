import React from "react";

function ShowFarenheit({ weather, farenheit }) {
  if (farenheit) {
    return (
      <div className="city-temp">
        {Math.round((weather.main.temp * 9) / 5 + 32)}

        <sup>&deg; F</sup>
      </div>
    );
  } else {
    return <div></div>;
  }
}

export default ShowFarenheit;
