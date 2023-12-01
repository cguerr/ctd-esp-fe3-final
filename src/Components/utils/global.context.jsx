import axios from "axios";
import { createContext, useReducer, useEffect, useContext } from 'react';
import { reducer } from '../../reducers/reducer'; 


const UserStates = createContext()

export const initialState = {
  list: [],
  favs: [],
  theme: "light", 
  
};

export const ContextGlobal = createContext(undefined);   

export const ContextProvider = ({ children }) => {
 
  const [state, dispatch] = useReducer(reducer, initialState)
  console.log(state)  
  const url ='https://jsonplaceholder.typicode.com/users'

  useEffect(() => {
    axios(url)
    .then(res => dispatch({type: 'GET_USERS', payload: res.data}))
}, [])

  return (
   
    <UserStates.Provider value={{state, dispatch}}>
      {children}
    </UserStates.Provider>
   
  )
}

export default ContextProvider

export const useUserStates = () => useContext(UserStates)

