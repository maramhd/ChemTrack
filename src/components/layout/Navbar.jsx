function Navbar() {
  return (
    <header className='navbar'>
      <div>
        <h2>Laboratory Dashboard</h2>
      </div>

      <div className='navbar-right'>
        <input
          className='search-input'
          type='text'
          placeholder='Search...'
        />

        <div className='profile-circle'>
          M
        </div>
      </div>
    </header>
  );
}

export default Navbar;