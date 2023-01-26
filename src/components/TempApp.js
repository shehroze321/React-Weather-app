import React, { useEffect, useState } from "react";
import "./css/style.css";

const TempApp = () => {
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchApi = async () => {
      const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=c08e6fb4f6acfccc7e48f18815a6ad01 `;
      const response = await fetch(url);

      const resJson = await response.json();
      //console.log(resJson);
      setCity(resJson.main);
    };
    fetchApi();
  }, [search]);
  return (
    <>
      <div className="box">
      <h1 className="city_name"> Enter Your City Name</h1>
   
        <div className="inputData">
          <input
          placeholder="i.e. Lahore "
            type="search"
            value={search}
            className="inputField"
            onChange={(event) => {setSearch(event.target.value)}}
          />
        </div>
        { !city ? (
            <p className="errorMsg">No data Found</p>
        ) : (

        

        <div>
        <div className="info">
          <h2 className="location">
            <i className="fa-solid fa-street-view"></i>
            {search}
          </h2>
          <h1 className="temp">{city.temp}°Cel</h1>
          <h3 className="tempmin_max">Min : {city.temp_min}°Cel | Max : {city.temp_max}°Cel</h3>

        </div>
        <div className="wave -one"></div>
        <div className="wave -two"></div>
        <div className="wave -three"></div>
      </div>

        )
        }
      </div>
     
    </>
  );
};
export default TempApp;