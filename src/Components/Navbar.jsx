import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useUserStates } from '../Components/utils/global.context';
import '../index.css'

const Navbar = () => {

  const { state, dispatch } = useUserStates(); 
  
  useEffect(() => {
  const htmlElement = document.documentElement;

  htmlElement.setAttribute(
    'data-bs-theme',
    state.theme === 'dark' ? 'dark' : 'light'
  );
}, [state.theme]);
 
  const handleThemeChange = () => {
    
    dispatch({ type: 'TOGGLE_THEME' });
  };

  return (
    <main className={`../index.css ${state.theme}`}>
    <nav>
      {<Link to='/home'><h4>Home</h4></Link>}
      {<Link to='/contacts'><h4>Contact</h4></Link>}
      {<Link to='/favs'><h4>Favs</h4></Link>}

      <button className='moonButton' onClick={handleThemeChange}>🌙</button>
    
    </nav>
    </main>
    );
}

export default Navbar;