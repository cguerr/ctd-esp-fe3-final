export const reducer = (state, action) => {
//ACA VA EL SWICH CASE
switch(action.type){
    case 'GET_USERS':
        return {...state, list: action.payload} 
    case 'TOGGLE_FAV':
      const isFav = state.favs.some((favItem) => favItem.id === action.payload.id);
      if (isFav) {
        // Si ya es favorito, quitarlo
        const updatedFavs = state.favs.filter((favItem) => favItem.id !== action.payload.id);
        return { ...state, favs: updatedFavs };
      } else {
        // Si no es favorito, agregarlo
        return { ...state, favs: [...state.favs, action.payload] };
      }
      case 'TOGGLE_THEME':
      return {
        ...state,   // Agregando este case 'TOGGLE_THEME':
        theme: state.theme === 'light' ? 'dark' : 'light',
      }
      default:
      return state;  
}
}