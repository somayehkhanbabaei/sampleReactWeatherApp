function WeatherDiscription() {
  return (
    <div>
      <div className='row'>
        <div className='col weatherCity'>
          <span id='cityName'> Tehran </span>
          <br />
          <span id='cityTime'> Friday 15:09minutes </span>
          <br />
          <span id='citySit'>Clear</span>
        </div>
      </div>

      <div className='row'>
        <div className='col ml-3 mt-4'>
          <span className='sunnyDay'>☀️</span>
          <span id='cityCanti'>38 </span>
          <sup>
            <span id='cantimeter'>°C</span> |<span id='farenhite'>°F</span>
          </sup>
        </div>
        <div className='col mt-5 weatherCity'>
          <span id='precip'> Precipitation: 11% </span>
          <br />
          <span id='windSpeed'> Wind: 2km/h </span>
        </div>
      </div>
    </div>
  );
}

export default WeatherDiscription;
