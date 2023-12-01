import React from "react";
import { Link } from 'react-router-dom' 
import { useUserStates } from '../Components/utils/global.context';


  const Card = ({ item}) => {
    const { state, dispatch } = useUserStates();


  const toggleFav = () => {
    
    dispatch({ type: 'TOGGLE_FAV', payload: item });

    const isFav = state.favs.some((favItem) => favItem.id === item.id);
    if (isFav) {
    alert('¡Se ha quitado de favoritos!');
  } else {
    alert('¡Añadido a favoritos!')
  }
}

  return (
    <div className="card">
        <Link to={'/detail/' + item.id}> 
        <img className="card" src={'/images/doctor.jpg'} alt="Dentista" />
        
        <h4>{item.id}</h4>   
        <h4>{item.name}</h4>  
        <h4>{item.username}</h4>  

        </Link>

        <button onClick={toggleFav} className="favButton">⭐</button>
    </div>
  );
}

export default Card;
