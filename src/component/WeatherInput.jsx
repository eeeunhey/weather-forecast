import { Button } from "bootstrap";

const WeatherInput = () => {
  // 입력받기
  //1. input에 엔터나 버튼을 클릭하면 발생해
  //2. 정보를 가져오는 곳에 검색을 한다

  
  return (
    <div className="search">
      
      <input className="city-input" placeholder="Search City" />
      
    </div>
  );
};

export default WeatherInput;
