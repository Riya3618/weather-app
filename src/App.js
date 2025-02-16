import './App.css';
import WeatherCard from './components/Weather';
import { Dimmer, Loader } from 'semantic-ui-react';
import useWeatherData from './utils/useWeatherData';
import Header from './components/Header';

function App() {
  const { data} = useWeatherData();
  
  if (data!=null && typeof data.main !== 'undefined') {
    
    return (
      <div className="App">
        <Header />
        <div className="weather-cards-container">
        <WeatherCard weatherData={data} /></div>
      </div>
    );
  } else {
    return <div className="App"><Header /></div>;
  }
}

export default App;
