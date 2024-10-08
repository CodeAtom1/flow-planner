import React, {useState, useMemo, useContext} from "react";
import SessionContext from "../SessionContext";

  const getData = async (token) => {
    var weatherList =[];
    try {    
      const response = await fetch('https://localhost:7095/WeatherForecast', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
      });
      
      const responseJson = await response.json();
      weatherList = [responseJson];
      console.log(weatherList);
    } catch (error) {
      console.error('Error:', error);
    }
    finally
    {
      return weatherList;
    }
  };

const WeatherWidget = async () =>{
    const [searchTerm, setSearchTerm] = useState("");

    const {user} = useContext(SessionContext);
    const weatherList = await getData(user.token);
    if(user.token != '')
        console.log(user.token);

    const filteredWeatherList = useMemo(() => {
        console.log("Filtering weather...");
        return weatherList.filter((weather) => weather.Summary.toLowerCase().includes(searchTerm.toLowerCase()))
    },[searchTerm]);

    return (
    <div>
        <input type="text" placeholder="Search weather" value={searchTerm} 
        onChange={(e) => setSearchTerm(e.target.value)} />
        <ul>
            {
                filteredWeatherList.map((weather) =>
                (<li key={weather.Date}>
                    {weather.Summary} - Age {weather.TemperatureC}
                </li>))
            }
        </ul>
    </div>)
}

export default WeatherWidget;