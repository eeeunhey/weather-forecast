import { useEffect, useState } from "react";
import "./App.css";
import WeatherBox from "./component/WeatherBox";
import WeatherButton from "./component/WeatherButton";
import WeatherSideInfo from "./component/WeatherSideInfo";
import SpinnerLoader from "./component/SpinnerLoader";

function App() {
  // 할일 정리하기
  // 1. 앱이 실행되자 마자 현재 위치 기반의 날씨가 보인다
  // 2. 날씨 정보 도시 , 섭씨, 화씨, 날씨 상태 정보가 들어간다
  // 3. 버튼이 5개의 버튼이 있다
  // 4. 한개는 현재 4개는 다른 도시
  // 5. 도시버튼을 클릭하면 도시별 날씨가 보인다
  // 6. 현재 버튼 위치 버튼을 누르면 다시 현재 위치 기반의 날씨가 나온다
  // 7. 데이터를 들고 오는 동안 로딩
  const API_KEY = import.meta.env.VITE_API_KEY;
  const [cityInput, setCityInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [weather, setWeather] = useState(null);
  const [pollution, setPollution] = useState(null);
  const [city, setCity] = useState(null);
  const cities = ["Praha", "Budapest", "Seoul"];
  const [error, setError] = useState(false);
  const [apiError, setAPIError] = useState("");

  // 위 경도 위도 가지고 지역을 반환 하는 함수

  //경로 위도 정보 가지는 함수

  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      getWeatherByCurrentLocation(latitude, longitude);
      getPollutionByCurrentLocation(latitude, longitude);
    });
  };

  const getWeatherByCurrentLocation = async (lat, lon) => {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
      let response = await fetch(url);
      let data = await response.json();
      setWeather(data);
      setLoading(false);
      //console.log("weather info ",data);
    } catch (err) {
      setAPIError(err.message);
      setLoading(false);
    }
  };

  // 지역명에 해당하는 날씨 정보를 반환하는 녀석
  const getWeatherByCity = async () => {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
      let response = await fetch(url);
      let data = await response.json();
      //setCity(data);
      console.log("city", data);
      setWeather(data);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setAPIError(err.message);
      setLoading(false);
    }
  };

  const getPollutionByCurrentLocation = async (lat, lon) => {
    try {
      let url = `http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
      let res = await fetch(url);
      let data = await res.json();
      console.log("polu",data);
      setPollution(data);
      setLoading(false);
    } catch (err) {
      setAPIError(err.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (city == null) {
      setLoading(true);
      getCurrentLocation();
    } else {
      setLoading(true);
      getWeatherByCity();
    }
    // console.log("city",city);
  }, [city]);

  const handleCityChange = (city) => {
    if (city === "current") {
      setCity(null);
    } else {
      setCity(city);
    }
  };

  return (
    <>
      {loading ? (
        <SpinnerLoader />
      ) : apiError ? (
        <div className="error">{apiError}</div>
      ) : (
        <div className="weather-shell">
          <div className="content">
            <WeatherSideInfo weather={weather} setCity={setCity} />

            <main className="main">
              <div className="btn">
                <WeatherButton
                  cities={cities}
                  handleCityChange={handleCityChange}
                  setCity={setCity}
                />
              </div>
              <WeatherBox weather={weather} pollution={pollution} />
            </main>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
