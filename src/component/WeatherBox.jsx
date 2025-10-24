import { Input } from "@mui/material";


const WeatherBox = ({ weather }) => {
  // props 안치는 법 ({})
  return (
    <div className="weather-box">
      <Input
        placeholder="Search City"
        disableUnderline

        sx={{
          width: "clamp(200px, 40vw, 400px)",
          borderRadius: "30px",
          background: "rgba(255,255,255,0.15)",
          backdropFilter: "blur(10px)",
          color: "#fff",
          padding: "8px 16px",
        }}
      />

      <div>{weather?.name}</div>
      <h2>
        {weather?.main.temp} C / {Math.round(weather?.main.temp * 1.8 + 32)} °F
      </h2>
      <h3>{weather?.weather[0].description}</h3>
    </div>
  );
};

export default WeatherBox;
