export const Navbar = ({
  value,
  setValue,
  setSearchValue,
  searchValue,
  isInitialRender,
  setInitialRender,
}) => {
  const handleSearchValueChange = (e) => {
    setSearchValue(e.target.value)
    console.log(searchValue)
  }

  const handleSubmit = (event) => {
    setValue(searchValue)
    event.preventDefault()
    setInitialRender(false)
  }
  return (
    <nav className='navbar fixed-top bg-body-tertiary'>
      <div className='container-fluid'>
        <a className='navbar-brand'>Navbar</a>
        <form className='d-flex ' role='search'>
          <input
            value={searchValue}
            onChange={handleSearchValueChange}
            onSubmit={handleSubmit}
            className='form-control me-2'
            type='search'
            placeholder='Search'
            aria-label='Search'
          ></input>
          <button
            className='btn btn-outline-success'
            type='submit'
            onClick={handleSubmit}
          >
            Search
          </button>
        </form>
      </div>
    </nav>
  )
}
