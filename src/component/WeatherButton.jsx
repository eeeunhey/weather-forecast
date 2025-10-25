
import { Button } from "@mui/material"

const WeatherButton = ({cities}) => {
  console.log(cities)
  return (
    <div>
        <Button variant="contained" >Current Location</Button>
        {/* <Button variant="contained">Praha</Button>
        <Button variant="contained">Budapest </Button>
        <Button variant="contained">Seoul </Button> */}

        {cities.map((item)=> (
            <Button variant="contained">{item}</Button>
        ))}
    </div>
  )
}

export default WeatherButton