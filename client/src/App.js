import React,{createContext, useReducer} from 'react';
import {Route, Routes} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Login from './components/Login';
import Signup from './components/Signup';
import Logout from "./components/Logout";
import Errorpage from './components/Errorpage';


import { initialState, reducer } from './reducer/UseReducer';
 // contextAPI
export const userContext = createContext();


const App = () => {
    const [state, dispatch] = useReducer(reducer, initialState );
 

  return (
    <>
    <userContext.Provider value={{state, dispatch}}>
      <Navbar/>

      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/logout" element={<Logout />} />
      <Route path="*" element={<Errorpage />} />
     </Routes>
    </userContext.Provider>
    
    </>
  )
  
}

export default App;
