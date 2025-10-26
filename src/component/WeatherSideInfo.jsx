import { Button } from "@mui/material";

const WeatherSideInfo = ({ weather }) => {
  const iconCode = weather?.weather[0].icon;

  const customIcons = {
    "01d": "/weatherImg/01d.svg",
    "01n": "/weatherImg/01n.svg",
    "02d": "/weatherImg/02d.svg",
    "02n": "/weatherImg/02n.svg",
    "03n": "/weatherImg/03d.svg",
    "03d": "/weatherImg/03d.svg",
    "04n": "/weatherImg/03d.svg",
    "04d": "/weatherImg/04d.svg",
    "09d": "/weatherImg/09d.svg",
    "10d": "/weatherImg/10d.svg",
    "11d": "/weatherImg/11d.svg",
    "11n": "/weatherImg/11n.svg",
    "13d": "/weatherImg/13d.svg",
    "13n": "/weatherImg/13n.svg",
    "50d": "/weatherImg/50d.svg",
    "50n": "/weatherImg/50n.svg",
  };

  const iconUrl =
    customIcons[iconCode] ||
    `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

  return (
    <>
      <div className="side">
        {/* <div className="search">
          <input className="city-input" placeholder="Search City" />
          <Button
            sx={{
              borderRadius: "12px",
              "&:hover": { backgroundColor: "rgba(255,255,255,0.3)" },
              img: {
                width: "25px",
                height: "25px",
              },
            }}
          >
            <img src="/img/Magnifier.svg" alt="search" />
          </Button>
        </div> */}
        <div>
          <p className="time-text">
            {new Date(weather?.dt * 1000)
              .toLocaleString("en-US", {
                year: "2-digit",
                month: "2-digit",
                day: "2-digit",
                hour: "2-digit",
                minute: "2-digit",
                hour12: true,
              })
              .replace(",", "")}
          </p>
        </div>

        <div className="weather-info">
          <img
            src={`/img/weatherImg/${iconCode}.svg` || `${iconUrl}`}
            alt={weather?.weather[0].description.icon}
            className="weather-icon"
          />
          <div className="">
            <h1>{Math.round(weather?.main.temp)}°C</h1>
            <h3> {weather?.weather[0].description}</h3>
          </div>

          {/* <p>체감: {weather?.main.feels_like}°C</p>
        <p>습도: {weather?.main.humidity}%</p>
        <p>풍속: {weather?.wind.speed} m/s</p>
        <p>기압: {weather?.main.pressure} hPa</p>
        <p>일출: {weather?.sys.sunrise}</p> */}
        </div>

        <div>
          <div className="weather-info">

              <img src="/img/icon/windy.svg" className="icon" />
              <p>습도: {weather?.main.humidity}%</p>


              <img src="/img/icon/windy.svg" className="icon" />
              <p>풍속: {weather?.wind.speed} m/s</p>

            <img src="/img/icon/windy.svg" className="icon" />
            <p>체감 온도: {weather?.main.feels_like}°C</p>
            <img src="/img/icon/windy.svg" className="icon" />
            <p>기압: {weather?.main.pressure} hPa</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default WeatherSideInfo;
