import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; 
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from './Routes/Home'
import Favs from './Routes/Favs'
import Detail from './Routes/Detail'
import Contact from './Routes/Contact';
import { ContextProvider } from './Components/utils/global.context';
import { useUserStates } from './Components/utils/global.context'; //sume esto

function App() {
  
  return (
<ContextProvider>
  <Router>
    <div>
    <Navbar/>
    
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/home' element={<Home />} />
      <Route path='/favs' element={<Favs/>}/>
      <Route path='/detail/:id' element={<Detail />}/>
      <Route path='/contacts' element={<Contact/>}/>
    </Routes>
  
  <Footer/>
  </div>
  </Router>  
  </ContextProvider>  
 
  );
}

export default App;
