import WeatherInput from "./WeatherInput";

const WeatherBox = ({ weather, pollution }) => {
  // props 안치는 법 ({})
  console.log(weather);
  const aqi = pollution?.list?.[0]?.main?.aqi;

  const AQI_LABEL = ["—", "Good", "Fair", "Moderate", "Poor", "Very Poor"];
  const AQI_CLASS = ["", "aqi-1", "aqi-2", "aqi-3", "aqi-4", "aqi-5"];
  let label = "정보 없음";
  let className = "aqi-unknown";

  if (aqi === 1) {
    label = "공기 좋음 🍃";
    className = "aqi-good";
  } else if (aqi === 2) {
    label = "보통 😐";
    className = "aqi-fair";
  } else if (aqi === 3) {
    label = "약간 나쁨 😕";
    className = "aqi-moderate";
  } else if (aqi === 4) {
    label = "나쁨 😷";
    className = "aqi-poor";
  } else if (aqi === 5) {
    label = "매우 나쁨 ☠️";
    className = "aqi-verypoor";
  }
  return (
    <div className="cards">
      <div className="card">
        <div className="title">Humidity</div>
        <div className="value">{weather?.main?.humidity}%</div>
      </div>

      <div className="card">
        <div className="title">Wind Status</div>
        <div className="value">
          {(weather?.wind?.speed * 3.6).toFixed(2)} km/h
        </div>
        <div className="sub">{weather?.name}</div>
      </div>

      <div className="card">
        <div className="title">{weather?.name}</div>
        <div className="value">
          {Math.round(weather?.main?.temp)}°C /{" "}
          {Math.round(weather?.main?.temp * 1.8 + 32)}
          °F
        </div>
        <div className="sub">{weather?.weather?.[0]?.description}</div>
      </div>

      <div className="card">
        <div className="title">Air Quality.</div>
        <div className="aq-info">
          <h2 className={className}> 미세먼지 {label}</h2>
          {/* <p className="aq-sub">AQI {aqi}</p> */}
        </div>
      </div>

      {/* <div className="weather-cards">
        <div>{weather?.name}</div>
        <h2>
          {weather?.main.temp} C / {Math.round(weather?.main.temp * 1.8 + 32)}{" "}
          °F
        </h2>
        <h3>{weather?.weather[0].description}</h3>
      </div> */}

      {/* <div className="weather-cards">
        {/* <img className="weather-icon" src={iconUrl} alt={weather?.weather[0].description} /> */}
        {/* <div>{weather?.name}</div>
        <h2>
          {weather?.main.temp} C / {Math.round(weather?.main.temp * 1.8 + 32)}{" "}
          °F
        </h2>
        <h3>{weather?.weather[0].description}</h3>

        <div>
          <h3>Air qualility</h3>
          {/* <h3>{pollution?.list[0]?.main?.aqi}</h3> */}
          {/* <h3>{pollution?.main?.aqi}</h3> */}

          {/* <div className="aq-info">
            <h2 className={className}> 미세먼지 {label}</h2>
            {/* <p className="aq-sub">AQI {aqi}</p> */}
          {/* </div> */}
      {/* //   </div> */} 

    </div>
  );
};

export default WeatherBox;
