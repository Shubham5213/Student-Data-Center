import React, {useContext, useState} from 'react';
import loginpic from "../images/login1.jpg";
import {Link, useNavigate} from "react-router-dom";
import { userContext } from '../App';
require("./Login.css");


const Login = () => {

  const {state, dispatch} = useContext(userContext);

  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  let name, value;
  const handleChange = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const loginUser= async (e)=>{
    e.preventDefault();
    const { email, password } = user;
    const res = await fetch("/signin",{
      method : "POST",
      headers: {
        "content-type" : "application/json"
      },
      body: JSON.stringify({
        email, 
        password
      })
    });

    const data = await res.json();

     if(res.status===400  || !data){
       window.alert("Invalid Credeatials");
       console.log("Invalid Credeatials");
     }else{
      //  alert("Login Successful!");
       dispatch({type:"USER", payload : true})
       console.log("Login Successful!");
       navigate("/");
     }
  }
  return (
    <>
      <section className="main-div">
        <div className="left-div">
          <h2>Login</h2>
          <form method="POST">
            <div className="form-group-login">
              <label htmlFor="email">
                <i className="zmdi zmdi-email"></i>
              </label>
              <input
                type="email"
                name="email"
                id="email"
                autoComplete="off"
                onChange={handleChange}
                value={user.email}
                placeholder="Your Email"
              />
            </div>
            <div className="form-group-login">
              <label htmlFor="password">
                <i className="zmdi zmdi-lock"></i>
              </label>
              <input
                type="password"
                name="password"
                id="password"
                autoComplete="off"
                onChange={handleChange}
                value={user.password}
                placeholder="Password"
              />
            </div>

            <div className="form-group-login form-button">
              <input
                type="submit"
                name="login"
                className="form-submit"
                value="Login"
                onClick={loginUser}
              />
            </div>
          </form>
        </div>
        <div className="right-div">
          <figure>
            <img className="image-signuin" src={loginpic} />
          </figure>
          <Link to="/signup" className="signup-image-link">
            {" "}
            Register as New User{" "}
          </Link>
        </div>
      </section>
    </>
  )
}

export default Login;




