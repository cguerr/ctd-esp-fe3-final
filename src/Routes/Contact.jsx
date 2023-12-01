import React from 'react'
import Form from '../Components/Form'
import { useUserStates } from "../Components/utils/global.context";
import '../index.css'

const Contact = () => {

  const { state } = useUserStates();

  return (
    <div>
      <main className={`../index.css ${state.theme}`}>
      <h2>Want to know more?</h2>
      <p>Send us your questions and we will contact you</p>
      <Form/>
      </main>
    </div>
  )
}

export default Contact