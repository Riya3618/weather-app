import React,{useState,useEffect} from 'react';
import axios from 'axios';

const useWeatherDataCity=(city)=>{
    const[data,setData]=useState(null);
    useEffect(()=>{
        const encodedCity=encodeURIComponent(city);
        if(city!=null){
            fetch(`${process.env.REACT_APP_API_URL}/weather/?q=${encodedCity}&appid=${process.env.REACT_APP_API_KEY}`)
            .then((res) => res.json())
            .then((result) => {
              setData(result);
              console.log(result);
            });
        }
    },[city])
    return {data};
};
export default useWeatherDataCity;