
import React from 'react'
import { useParams } from 'react-router-dom';
import Card from '../Components/Card'
import { useUserStates } from '../Components/utils/global.context'
import '../index.css' 

const Home = ({ theme }) => {

 const { state } =  useUserStates(); 
 const params = useParams();

 const isHomeRoute = params.hasOwnProperty('home');

  return (
    <main className={`../index.css ${state.theme}`}>
      <h1>Home</h1>
      <div className='card-grid'>  
        
      {state.list.map(item => <Card item={item} key={item.id} /> 
      )
    } 
   
      </div>
    </main>
  )
}

export default Home