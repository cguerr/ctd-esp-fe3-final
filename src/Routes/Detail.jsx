import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useUserStates } from "../Components/utils/global.context";
import '../index.css'

const Detail = () => {
 

  const { id } = useParams(); 
  const [user, setUser] = useState(null);
  const { state } = useUserStates();

  useEffect(() => {

    const fetchUserData = async () => {
      try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
        setUser(response.data);
      } catch (error) {
        console.error('Error fetching dentist details:', error);
      }
    };

    fetchUserData();
  }, [id]); 

  return (
    <>
    <main className={`../index.css ${state.theme}`}>
      <h1>Detail Dentist id </h1>
      {user ? (
        <div>
          <h1>{user.name}</h1>
          <p>Email: {user.email}</p>
          <p>Teléfono: {user.phone}</p>
          <p>Sitio web: {user.website}</p>
        </div>
      ) : (
        <p>Cargando información del dentista...</p>
      )
      }
      </main>
    </>
  )
}

export default Detail