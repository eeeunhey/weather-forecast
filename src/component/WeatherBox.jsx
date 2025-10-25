import WeatherInput from "./WeatherInput";

const WeatherBox = ({ weather }) => {
  // props 안치는 법 ({})
  console.log(weather)
  return (
    <div className="weather-box">
      <div className="main">

        <div>{weather?.name}</div>
        <h2>
          {weather?.main.temp} C / {Math.round(weather?.main.temp * 1.8 + 32)}{" "}
          °F
        </h2>
        <h3>{weather?.weather[0].description}</h3>
      </div>
    </div>
  );
};

export default WeatherBox;
