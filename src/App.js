import './App.css';
import React,{useState,useEffect} from 'react';
import WeatherCard from './components/Weather';
import axios from 'axios';
import { Dimmer, Loader } from 'semantic-ui-react';

function App() {
  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      navigator.geolocation.getCurrentPosition(function(position) {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
      });
      if(lat!=null && long!=null){
      await fetch(`${process.env.REACT_APP_API_URL}/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`)
      .then(res => res.json())
      .then(result => {
        setData(result)
        console.log(result);
      });
    }}
    fetchData();
  }, [lat,long])
  
  return (
    <div className="App">
      {(typeof data.main !='undefined')?(<WeatherCard weatherData={data} />):(<div><Dimmer active>
            <Loader>Loading...</Loader>
          </Dimmer></div>)}
    </div>
  );

}

export default App;
