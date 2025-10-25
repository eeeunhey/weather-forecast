const WeatherSideInfo = ({ weather }) => {
  return (
    <div className="side">

      <p>🌡 {weather?.main.temp}°C</p>
      <p>체감: {weather?.main.feels_like}°C</p>
      <p>습도: {weather?.main.humidity}%</p>
      <p>풍속: {weather?.wind.speed} m/s</p>
      <p>기압: {weather?.main.pressure} hPa</p>
      <p>선라이즈: {weather?.sys.sunrise} hPa</p>
    </div>
  );
};

export default WeatherSideInfo;
