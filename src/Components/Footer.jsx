import React from 'react'
import { useUserStates } from '../Components/utils/global.context';
import '../index.css'

const Footer = () => {

  const { state, dispatch } = useUserStates();

  return (
    <main className={`../index.css ${state.theme}`}>
    <footer>
        <p>Powered by</p>
        <img src="/images/DH.png" alt='DH-logo' />
        
    </footer>
    </main>
  )
}

export default Footer
