import React from "react";


export default function Weather() {
  let weatherData = {
    city: "Amsterdam",
    day: "Saturday 6pm",
    description: "Rain",
    realtemp: "15",
    temp: "12",
    wind: "5",
    humidity: "87",
    image: "https://c.tadst.com/gfx/w/svg/wt-18.svg"
  };
  return (
    <div className="Weather">
      <div className="weatherborder">
        <div className="row">
          <div className="col-9">
            <form>
              <input
                type="search"
                placeholder="Please type the city name"
                className="form-control"
                autocomplete="off"
              />
              <div className="col-3">
                <input
                  type="submit"
                  value="Search"
                  className="btn btn-primary"
                />
              </div>
            </form>
          </div>
        </div>
        <p className="main">
          <span> {weatherData.city} </span>
          <br />
          <li>Updated at: {weatherData.day}</li>
        </p>
        <hr />
        <div className="row">
          <div className="col-4">
            <ul>
              <li>
                {""}
                <span> {weatherData.description} </span>{" "}
              </li>
              <li>
                {" "}
                Real Feel: <span>{weatherData.realtemp}</span> °C{" "}
              </li>
            </ul>
          </div>
          <div className="col-4">
            <img src={weatherData.image} alt="Clear" className="mainimage" />
            <span> </span>
            <span className="grados"> {weatherData.temp}°C </span>
          </div>
          <div className="col-4">
            <ul>
              <li>
                {" "}
                Wind: <span> {weatherData.wind} </span>km/h
              </li>
              <li>
                Humidity: <span> {weatherData.humidity} </span>%
              </li>
            </ul>
          </div>
        </div>
        <hr />
        <div className="row2"></div>
        <br />
        <small>
          <a
            href="https://github.com/Vannecj4/Weather-App"
            target="_blank"
            rel="noreferrer"
          >
            Open-source code
          </a>
          by Vanne Cerdas
        </small>
      </div>
    </div>
  );
}
