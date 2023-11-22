function SearchButton() {
  return (
    <div class='row mt-4'>
      <div className='col-11 search'>
        <form className='input-group mb-3 ml-3 searchForm'>
          <input
            id='searchWeather'
            type='text'
            className='form-control searchInput'
            autofocus
          />
          <div className='input-group-append'>
            <button
              className='btn btn-primary'
              type='submit'
              id='button-addon2'
            >
              Search
            </button>
            <button className='btn btn-success ml-3' id='button-addon2'>
              Current
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SearchButton;
