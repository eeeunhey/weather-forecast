import { Input } from "@mui/material";

const WeatherBox = ({ weather }) => {
  // props 안치는 법 ({})
  return (
    <div className="weather-box">
      <input className="city-input" placeholder="Search City"/>
      <div>{weather?.name}</div>
      <h2>
        {weather?.main.temp} C / {Math.round(weather?.main.temp * 1.8 + 32)} °F
      </h2>
      <h3>{weather?.weather[0].description}</h3>
    </div>
  );
};

export default WeatherBox;
