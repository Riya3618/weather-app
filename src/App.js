import './App.css';
import WeatherCard from './components/Weather';
import { Dimmer, Loader } from 'semantic-ui-react';
import useWeatherData from './utils/useWeatherData';
import Header from './components/Header';

function App() {
  const { data} = useWeatherData();
  
  
  // if (data === null) {
  //   // Data is still loading, show loading indicator
  //   return (
  //     <div className="App">
  //       <Dimmer active>
  //         <Loader>Loading...</Loader>
  //       </Dimmer>
  //     </div>
  //   );
  // }

  if (data!=null && typeof data.main !== 'undefined') {
    // Data has been loaded, render WeatherCard
    return (
      <div className="App">
        <Header />
        <WeatherCard weatherData={data} />
      </div>
    );
  } else {
    return <div className="App"><Header /></div>;
  }
}

export default App;
