import { Button } from "@mui/material";

const WeatherButton = ({ cities, setCity, handleCityChange }) => {
  console.log(cities);

  return (
    <div>
      <Button

        sx={{
          color: setCity === null ? "#ED8554" : "#666"
        }}
        onClick={() => handleCityChange("current")}
      >
        Current Location
      </Button>
      {/* <Button variant="contained">Praha</Button>
        <Button variant="contained">Budapest </Button>
        <Button variant="contained">Seoul </Button> */}

      {cities.map((city) => (
        <Button

          sx={{ color: "#666" }}
          key={city}
          onClick={() => setCity(city)}
        >
          {city}
        </Button>
      ))}
    </div>
  );
};

export default WeatherButton;
