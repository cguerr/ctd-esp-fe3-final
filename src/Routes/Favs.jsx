import React, { useEffect, useState }  from "react";
import Card from "../Components/Card";
import { useUserStates } from "../Components/utils/global.context";
import '../index.css'

const Favs = () => {
 
  const { state } = useUserStates();

  useEffect(() => {
    
    const favsFromStorage = JSON.parse(localStorage.getItem('favs')) || [];
    }, []);

  return (
    <>
      <main className={`../index.css ${state.theme}`}>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
      {state.favs.map(item => (
          <Card item={item} key={item.id} />
        ))}
      </div>
      </main>
    </>
  );
};

export default Favs;
