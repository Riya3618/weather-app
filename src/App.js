import './App.css';
import WeatherCard from './components/Weather';
import { Dimmer, Loader } from 'semantic-ui-react';
import useWeatherData from './utils/useWeatherData';
// const AppLayout=()=>{
//   return (<React.Fragment>
//     <Header />
//     <Body />
//     <Footer />
//   </React.Fragment>);
// };
function App() {
  const { data} = useWeatherData();
  // const AppRouter=createBrowserRouter([
  //   path
  // ])
  
  if (data === null) {
    // Data is still loading, show loading indicator
    return (
      <div className="App">
        <Dimmer active>
          <Loader>Loading...</Loader>
        </Dimmer>
      </div>
    );
  }

  if (typeof data.main !== 'undefined') {
    // Data has been loaded, render WeatherCard
    return (
      <div className="App">
        <WeatherCard weatherData={data} />
      </div>
    );
  } else {
    // Data is available but doesn't contain 'main', handle this case
    return <div>No weather data available.</div>;
  }
}

export default App;
