import SearchButton from './SearchButton';
import WeatherDiscription from './WeatherDiscription';
import WeekDaysWeather from './WeekDaysWeather';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

function App() {
  return (
    <div className='App'>
      <div className='container'>
        <div className='card shadow mt-5'>
          <SearchButton />
          <WeatherDiscription />
          <WeekDaysWeather />
        </div>
        <a href='https://github.com/somayehkhanbabaei/weather_app'>
          Go to Github
        </a>
      </div>
    </div>
  );
}

export default App;
