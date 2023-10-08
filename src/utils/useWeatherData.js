import React,{useState,useEffect} from 'react';
import axios from 'axios';

const useWeatherData=()=>{
    const [lat, setLat] = useState(null);
    const [long, setLong] = useState(null);
    const [data, setData] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
          navigator.geolocation.getCurrentPosition(function (position) {
            setLat(position.coords.latitude);
            setLong(position.coords.longitude);
          });
        };
    
        fetchData(); 
        if (lat !== null && long !== null) {
          fetch(`${process.env.REACT_APP_API_URL}/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`)
            .then((res) => res.json())
            .then((result) => {
              setData(result);
              console.log(result);
            });
        }
      }, [lat, long]);
    
      return { data };
    };

export default useWeatherData;
  