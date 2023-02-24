import React from "react";
import { useState } from "react";

export const WeatherForm = ({onChangeCity}) => {
  const [city, SetCity] = useState("");

  const onChange = (e) => {
    const value = e.target.value;

    if (value !== ''){
        SetCity(value)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    onChangeCity(city)
  }

  return <form onSubmit={handleSubmit}>
    <input type="text" onChange={onChange}/>
  </form>;
};
