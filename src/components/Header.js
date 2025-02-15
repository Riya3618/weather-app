import WeatherNow from '../images/WeatherNow.png';
import useWeatherDataCity from '../utils/useWeatherDataCity';
import React,{useState,useEffect} from 'react';
import WeatherCard from '../components/Weather';

const Header=()=>{
    const[search,setSearch]=useState('');
    const { data: weatherData } = useWeatherDataCity(search);
    const handleSearchChange=(e)=>{
        setSearch(e.target.value);
    }
 
    return(
        <div>
            <header>
                <img src={WeatherNow} alt='Logo' /> 
                <input type="text" placeholder='Search city' value={search} onChange={handleSearchChange} />
            </header>
            <main>
                
                {weatherData ? (
                    <WeatherCard weatherData={weatherData} />
                ) :  (
                    <p>No data available</p>
                )}
            </main>
        </div>
        
    )
}

export default Header;