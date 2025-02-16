import WeatherNow from '../images/WeatherNow.png';
import useWeatherDataCity from '../utils/useWeatherDataCity';
import React,{useState,useEffect} from 'react';
import WeatherCard from '../components/Weather';

const Header=()=>{
    const[search,setSearch]=useState('');
    const { data: weatherData } = useWeatherDataCity(search);
    const [darkMode, setDarkMode] = useState(false);

    const handleSearchChange=(e)=>{
        setSearch(e.target.value);
    }
    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        document.body.classList.toggle('dark-mode', !darkMode);
    };

    return(
        <div>
            <header>
                <img src={WeatherNow} alt='Logo' /> 
                <div className="search-container">
                <input type="text" placeholder='Search city' value={search} onChange={handleSearchChange} />
                <button
                className="toggle-button"
                onClick={toggleDarkMode}
                data-hover-text={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
                {darkMode ?'☀️': '🌙'}
            </button></div>
            </header>
            <main>
            <div className="weather-cards-container">
                {weatherData ? (
                    <WeatherCard weatherData={weatherData} />
                ) :  (
                    <p>No data available</p>
                )}</div>
            </main>
        </div>
        
    )
}

export default Header;