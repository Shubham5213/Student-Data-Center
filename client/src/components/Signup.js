import React, {useState} from 'react';
import signpic from "../images/signup.jpg";
import {Link, useNavigate} from "react-router-dom";
import "./Signup.css";


const Signup = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email :"",
    phone:"",
    work:"",
    password:"",
    cpassword:""
  });

  let name, value;

  const handleInputs=(e)=>{
      name=e.target.name;
      value=e.target.value;
      setUser({...user, [name]:value})
  }

  const postData =async(e)=>{
      e.preventDefault();
      const {name, email, phone, work, password, cpassword} = user;
      const res = await fetch("/register",{
        method : "POST",
        headers:{
          "content-type" : "application/json"
        },
        body:JSON.stringify({
          name, email, phone, work, password, cpassword
        })
      })

      const data = await res.json();

      if(res.status===422 || !data){
        window.alert("Invalid Registration");
        console.log("Invalid Registration");
      }
      else{
        window.alert("Registerion successfull!");
        //  alert("Registration Successful!");
        console.log("Registration Successfull!");
        navigate("/login");
      }
  }



return (
    <section className="main-div">
      <div className="left-div">
        <h2>Signup</h2>
        <form method="POST">
          <div className="form-group-signup">
            <label htmlFor="name">
              <i className="zmdi zmdi-account"></i>
            </label>
            <input
              type="text"
              name="name"
              id="name"
              autoComplete="off"
              value={user.name}
              onChange={handleInputs}
              placeholder="Yourname"
            />
          </div>
          <div className="form-group-signup">
            <label htmlFor="email">
              <i className="zmdi zmdi-email"></i>
            </label>
            <input
              type="email"
              name="email"
              id="email"
              autoComplete="off"
              value={user.email}
              onChange={handleInputs}
              placeholder="Your Email"
            />
          </div>
          <div className="form-group-signup">
            <label htmlFor="phone">
              <i className="zmdi zmdi-phone-in-talk"></i>
            </label>
            <input
              type="number"
              name="phone"
              id="phone"
              autoComplete="off"
              value={user.phone}
              onChange={handleInputs}
              placeholder="Your Mobile Number"
            />
          </div>
          <div className="form-group-signup">
            <label htmlFor="work">
              <i className="zmdi zmdi-slideshow"></i>
            </label>
            <input
              type="text"
              name="work"
              id="work"
              autoComplete="off"
              value={user.work}
              onChange={handleInputs}
              placeholder="Your Profession"
            />
          </div>
          <div className="form-group-signup">
            <label htmlFor="password">
              <i className="zmdi zmdi-lock"></i>
            </label>
            <input
              type="password"
              name="password"
              id="password"
              autoComplete="off"
              value={user.password}
              onChange={handleInputs}
              placeholder="Password"
            />
          </div>
          <div className="form-group-signup">
            <label htmlFor="cpassword">
              <i className="zmdi zmdi-lock"></i>
            </label>
            <input
              type="password"
              name="cpassword"
              id="cpassword"
              autoComplete="off"
              value={user.cpassword}
              onChange={handleInputs}
              placeholder="Confirm Password"
            />
          </div>
          <div className="form-group-signup form-button">
            <input type="submit" name="signup" className="form-submit" value="Register" onClick={postData}/> 
          </div>
        </form>
      </div>
      <div className="right-div">
        <figure>
          <img className="image-signup" src={signpic} alt="signpic" />
        </figure>
        <Link to='/login' className="signup-image-link">I am Already Registered </Link> 
      </div>
    </section>
  );
};



// return (
//     <>
//     <section className="signup">
//       <div className='container mt-5'>
//         <div className='signup-content'>
//         <div className='signup-form'>
//           <h2 className="form-title">Sign up</h2>
//           <form className="register-form" id='register form' method="POST">
//             <div className="form-group">
//               <label htmlFor="name">
//                 <i className="zmdi zmdi-account"></i>
//               </label>
//               <input type="text" name='name' id='name' autoComplete='off'
//               value={user.name}
//               onChange={handleInputs}
//               placeholder='Enter your name' />
//             </div>

//             <div className="form-group">
//               <label htmlFor="email">
//                 <i className="zmdi zmdi-email"></i>
//               </label>
//               <input type="email" name='email' id='email' autoComplete='off'
//               value={user.email}
//               onChange={handleInputs}
//               placeholder='Enter your email' />
//             </div>
//             <div className="form-group">
//               <label htmlFor="phone">
//                 <i className="zmdi zmdi-phone-in-talk"></i>
//               </label>
//               <input type="number" name='phone' id='phone' autoComplete='off'
//               value={user.phone}
//               onChange={handleInputs}
//               placeholder='Enter your phone' />
//             </div>
//             <div className="form-group">
//               <label htmlFor="work">
//                 <i className="zmdi zmdi-slideshow"></i>
//               </label>
//               <input type="text" name='work' id='work' autoComplete='off'
//               value={user.work}
//               onChange={handleInputs}
//               placeholder='Enter your profession' />
//             </div>
//             <div className="form-group">
//               <label htmlFor="password">
//                 <i className="zmdi zmdi-lock"></i>
//               </label>
//               <input type="password" name='password' id='password' autoComplete='off'
//               value={user.password}
//               onChange={handleInputs}
//               placeholder='Enter password' />
//             </div>
//             <div className="form-group">
//               <label htmlFor="cpassword">
//                 <i className="zmdi zmdi-lock"></i>
//               </label>
//               <input type="password" name='cpassword' id='cpassword' autoComplete='off'
//               value={user.cpassword}
//               onChange={handleInputs}
//               placeholder='Confirm Your Password' />
//             </div>
            
//             <div className="form-group form-button">
//               <input type="submit" name='signup' id='signup' className='form-submit' 
//               value="Register" onClick={postData}/>
//             </div>
//           </form>
          
//         </div>
//         <div className="signup-image">
//             <figure>
//               <img src={signpic} alt="registration pic" />
//             </figure>
//             <Link to="/login" className="signup-image-link">I am already registered</Link>
//           </div>
            
//         </div>

//       </div>

//     </section>

//     </>
//   )
// }


export default Signup;