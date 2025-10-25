import { useEffect, useState } from "react";
import "./App.css";
import WeatherBox from "./component/WeatherBox";
import WeatherButton from "./component/WeatherButton";


function App() {
  // 할일 정리하기
  // 1. 앱이 실행되자 마자 현재 위치 기반의 날씨가 보인다
  // 2. 날씨 정보 도시 , 섭씨, 화씨, 날씨 상태 정보가 들어간다
  // 3. 버튼이 5개의 버튼이 있다
  // 4. 한개는 현재 4개는 다른 도시
  // 5. 도시버튼을 클릭하면 도시별 날씨가 보인다
  // 6. 현재 버튼 위치 버튼을 누르면 다시 현재 위치 기반의 날씨가 나온다
  // 7. 데이터를 들고 오는 동안 로딩
  
  const [weather, setWeather] = useState(null);
  const cities = ['Praha','Budapest','Seoul'];

  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      //console.log(lat,lon)
      getWeatherByCurrentLocation(lat, lon);
    });

    const getWeatherByCurrentLocation = async (lat, lon) => {
      let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=60ad6a3b88cbca2c0c9f2fe0e8be2bc7&units=metric`;
      let response = await fetch(url);
      let data = await response.json();
      setWeather(data);
      //console.log(data);
    };

    //console.log(getCurrentLocation);
  };

  useEffect(() => {
    getCurrentLocation();
  }, []);

  return (

      <div className="container">

        <WeatherBox weather={weather}/>
        <WeatherButton cities={cities}/>
      </div>

  );
}

export default App;
