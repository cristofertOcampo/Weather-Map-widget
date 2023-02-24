import React from "react";
import { useState } from "react";
import { WeatherForm } from "./WeatherForm";

export const WeatherApp = () => {
  const [weather, setWeather] = useState(null);

  const loadInfo = async (city = "londo") => {
    try {
      const request = await fetch(
        `${process.env.REACT_APP_URL}&key=${process.env.REACT_APP_KEY}&q=${city}`
      );

      const json = request.json();
      console.log(json);
    } catch (error) {}
  };

  const handleChangeCity = (city) => {
    setWeather(null);
    loadInfo(city);
  };

  return (
    <div>
      <WeatherForm onChangeCity={handleChangeCity} />
      <div>Info</div>
    </div>
  );
};
