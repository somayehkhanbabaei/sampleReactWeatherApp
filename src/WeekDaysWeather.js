function WeekDaysWeather() {
  return (
    <div>
      <div className='row mt-5'>
        <div className='col weekDays mb-2 ml-4'>Sat</div>
        <div className='col weekDays mb-2'>Sun</div>
        <div className='col weekDays mb-2'>Mon</div>
        <div className='col weekDays mb-2'>Tue</div>
        <div className='col weekDays mb-2'>Wen</div>
      </div>

      <div className='row'>
        <div className='col sunnyDay mb-2 ml-4'>☀️</div>
        <div className='col sunnyDay mb-2'>☀️</div>
        <div className='col sunnyDay mb-2'>☀️</div>
        <div className='col sunnyDay mb-2'>☀️</div>
        <div className='col sunnyDay mb-2'>☀️</div>
      </div>

      <div class='row mb-4'>
        <div class='col dgree ml-4'>39°</div>
        <div class='col dgree'>36°</div>
        <div class='col dgree'>32°</div>
        <div class='col dgree'>29°</div>
        <div class='col dgree'>27°</div>
      </div>
    </div>
  );
}

export default WeekDaysWeather;
