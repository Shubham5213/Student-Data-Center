import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import aboutpic from "../images/about.jpg";

const About = () => {
  const navigate = useNavigate();
  const [userData,setUserData]=useState({});


  const callAboutPage = async ()=>{
    try{
          const res = await fetch("/about",{
            method:"GET",
            headers:{
              Accept:"application/json",
              "Content-Type": "application/json"
            },
            credentials :"include"
          });

          const data = await res.json();
          setUserData(data);

          console.log(userData);
          if(!res.status ===200){
            const error = new Error(res.error);
            throw error;
          }
    }catch(err){
      console.log(err);
      navigate("/login");
    }
  }

  useEffect(()=>{
      callAboutPage();
  },[])
  

  return (
    <>
      <div className='container emp-profile mt-5 pt-1 box_shadow'>
        <form method="GET">
          <div className="row">
            <div className="col-md-4">
            <div className="profile-img mt-3 ml-2">
              <img src={aboutpic} alt="myimg" style={{height: "180px"}} />
            </div>
            </div>
            <div className="col-md-6">
              <div className="profile-head mt-5">
                <h5>{userData.name}</h5>
              <h6>{userData.work}</h6>
                <p className='profile-rating mt-3 mb-5'>Rating: <span>8/10</span></p>


                <ul className="nav nav-tabs" role="tablist">
                  <li className="nav-items">
                    <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab">About</a>
                  </li>
                  <li className="nav-items">
                    <a className="nav-link active" id="profile-tab" data-toggle="tab" href="#profile" role="tab">TimeLine</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-md-2">
              <input type="submit" className='profile-edit-btn mt-3' name="btnaddmore" value="Edit Profile"/>
            </div>
          </div>

          {/* left side data toogle */}
          <div className="row">
            <div className="col-md-4">
                  <div className="profile-work">
                    <p>Work Link</p>
                    <a href="https://www.instagram.com/kr_shubham521/" target="_blank">Facebook</a><br/> 
                    <a href="https://www.instagram.com/kr_shubham521/" target="_blank">Twitter</a><br/> 
                    <a href="https://www.instagram.com/kr_shubham521/" target="_blank">Instagram</a><br/> 
                    <a href="https://www.instagram.com/kr_shubham521/" target="_blank">AZ</a><br/>
                    <a href="https://www.instagram.com/kr_shubham521/" target="_blank">Codechef</a><br/>
                    <a href="https://www.instagram.com/kr_shubham521/" target="_blank">Codeforces</a><br/>
                    <a href="https://www.instagram.com/kr_shubham521/" target="_blank">Mysite</a><br/>
                  </div>
            </div>


            {/* left side data toogle */}
            <div className="col-md-8 pl-5 about-info">
                  <div className="tab-content profile-tab" id="myTabContent">
                    <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby='home-tab'>

                      <div className="row mt-3">
                        <div className="col-md-6">
                          <label htmlFor='USER ID'>USER ID</label> 
                        </div>
                        <div className="col-md-6">
                          <p>{userData._id}</p> 
                        </div>
                      </div>

                      <div className="row mt-1">
                        <div className="col-md-6">
                          <label htmlFor='USER ID'>Name</label> 
                        </div>
                        <div className="col-md-6">
                          <p>{userData.name}</p> 
                        </div>
                      </div>

                      <div className="row mt-1">
                        <div className="col-md-6">
                          <label htmlFor='USER ID'>Phone</label> 
                        </div>
                        <div className="col-md-6">
                          <p>{userData.phone}</p> 
                        </div>
                      </div>

                      <div className="row mt-1">
                        <div className="col-md-6">
                          <label htmlFor='USER ID'>Email</label> 
                        </div>
                        <div className="col-md-6">
                          <p>{userData.email}</p> 
                        </div>
                      </div>
                      
                      <div className="row mt-1">
                        <div className="col-md-6">
                          <label htmlFor='USER ID'>Profession</label> 
                        </div>
                        <div className="col-md-6">
                        <p>{userData.work}</p> 
                        </div>
                      </div>

                    </div>

                    
                  </div>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}

export default About;