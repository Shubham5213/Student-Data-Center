import React, {useContext}from 'react';
// import "bootstrap/dist/css/bootstrap.css" ;
import logo from "../images/logo1.png";
import {Link} from "react-router-dom";
import { userContext } from '../App';
require("./Navbar.css");



const Navbar = () => {
  const {state, dispatch} = useContext(userContext);

      const RepeatNavLinks =()=>{
        return (
          <>
              <li className="nav-item active">
                  <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/about">About</Link>
                  </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/contact">Contact</Link>
              </li>
          </>
        )
      }

      const RenderMenu =()=>{
        if(state){
          return (
            <>
                <RepeatNavLinks/>
                <li className="nav-item">
                  <Link className="nav-link" to="/logout">Logout</Link>
                </li>
            </>
          )
        }else{
          return (
            <>
                  <RepeatNavLinks/>
                  <li className="nav-item">
                    <Link className="nav-link" to="/login">Login</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/signup">Register</Link>
                  </li>
            </>
          )
        }

      }

      
return (
    <>
       <nav className="navbar navbar-expand-lg navbar-light bg-light">       
        <Link className="navbar-brand" to="/">
        <img src={logo} alt="logo" className='image' />
        </Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">

          <RenderMenu />
        </ul>
      </div>
      </nav>
    </>
  )
}

export default Navbar;