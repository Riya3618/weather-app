import React from 'react';
import WeatherNow from 'images/WeatherNow';

const Header=()=>{
    const[search,setSearch]=useState('');
    const handleSearchChange=(e)=>{
        setSearch(e.target.value);
    }
    return(
        <div>
        <img src={WeatherNow} alt='Logo' /> 
        <input type="text" placeholder='Search city' value={search} onChange={handleSearchChange} />
        </div>
        
    )
}

export default Header;