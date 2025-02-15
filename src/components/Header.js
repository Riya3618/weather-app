import WeatherNow from '../images/WeatherNow.png';
import useWeatherDataCity from '../utils/useWeatherDataCity';
import React,{useState,useEffect} from 'react';
import WeatherCard from '../components/Weather';

const Header=()=>{
    const[search,setSearch]=useState('');
    //const{data}=useWeatherDataCity();
    const { data: weatherData } = useWeatherDataCity(search);
    const[loading,setLoading]=useState(false);
    const handleSearchChange=(e)=>{
        setSearch(e.target.value);
    }
    useEffect(()=>{
        if(weatherData){
            setLoading(false);
        }
    },[weatherData])
    return(
        <div>
            <header>
                <img src={WeatherNow} alt='Logo' /> 
                <input type="text" placeholder='Search city' value={search} onChange={handleSearchChange} />
            </header>
            <main>
                {loading ? (
                <p>Loading...</p>
                ) : null}
                {weatherData ? (
                    <WeatherCard weatherData={weatherData} />
                ) : null}
            </main>
        </div>
        
    )
}

export default Header;