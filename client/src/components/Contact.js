import React, { useEffect, useState } from 'react';
import phone from "../images/phone2.png";
import email from "../images/email.jpg";
import address from "../images/address2.png";
require("./Contact.css");


const Contact = () => {


      const [userData,setUserData]=useState({
        name :"",
        email:"",
        phone:"",
        message:""
      });


      const userContact = async ()=>{
        try{
              const res = await fetch("/getdata",{
                method:"GET",
                headers:{
                  "Content-Type": "application/json"
                },
              });

              const data = await res.json();
              setUserData({
                  ...userData, 
                  name:data.name,
                  email:data.email,
                  phone: data.phone
                });

              // console.log(userData);
              if(!res.status ===200){
                const error = new Error(res.error);
                throw error;
              }
        }catch(err){
          console.log(err); 
        }
      }

      useEffect(()=>{
          userContact();
      },[])
  


      const handleInputs = (e)=>{
        const name = e.target.name;
        const value = e.target.value;

        setUserData({
          ...userData, 
          [name]:value
       })
      }


// send user message to backend
      const contactForm = async (e)=>{
        e.preventDefault();

        const {name, email, phone, message} = userData;
        const res = await fetch("/contact",{
          method:"POST",
          headers:{
        "content-type" : "application/json"
      },
      body: JSON.stringify({
        name, email, phone, message
      }) 
    });

    const data = await res.json();

     if(!data){
       window.alert("message not send!");
       console.log("message not send!");
     }else{
       window.alert("message Sent!!");
       console.log("message Sent!");
       setUserData({...userData, message:""})
     }
  }

  return (
    <>
      <div className='contact_info'>
        <div className="container-fluid">

          <div className="display_flex height40vh">
            <div className="col-lg-10 offset-lg-1 d-flex justify-content-between">
            {/* phone number */}
              <div className="contact_info_item">
                <img className='img-logo' src={phone} alt="phone" />
                <div className='contact_info_content'>
                  <div className="contact_info_title">Phone</div>
                  <div className="contact_info_text">+91 111 234 2356</div>
                </div>
              </div>
            {/* email*/}

              <div className="contact_info_item d-flx justify-content-start align-items-center">
                <img className='img-logo' src={email} alt="email" />
                <div className='contact_info_content'>
                  <div className="contact_info_title">Email</div>
                  <div className="contact_info_text">shubhamsaksena@gmail.com</div>
                </div>
              </div>
            {/* address */}

              <div className="contact_info_item d-flex justify-content-start align-items-center">
                <img className='img-logo' src={address} alt="address" />
                <div className='contact_info_content'>
                  <div className="contact_info_title">Address</div>
                  <div className="contact_info_text">IIT Kharagpur</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* contact us form */}
      <div className="contact_form">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 offset-lg-1 justify-content-between">
              <div className="contact_form_container py-5">
                <div className="contact_form_title">Get in Touch</div>
                 <form id='contact_form' method = "POST">
                 <div className="form-group">
                  <div className='contact_form_name d-flex justify-content-between align-items-between'>

                    <input type="text" id="contact_form_name" 
                    className="form-control mr-5"
                    name="name"
                    value={userData.name}
                    onChange={handleInputs}
                    placeholder='Your Name' required/>

                    <input type="email" id="contact_form_email" 
                    className="form-control mr-5"
                    name="email"
                    value={userData.email} 
                    onChange={handleInputs}
                    placeholder='Email' required/>

                    <input type="number" id="contact_form_phone" 
                    className="form-control"
                    name="phone"
                    value={userData.phone} 
                    onChange={handleInputs}
                    placeholder='Phone' required/>

                  </div>
                </div>
                <div className="form-group">
                  <div className="mt-5">
                    <textarea className='from-control'
                    style={{minWidth : "500px",
                    maxWidth:"100%", 
                    minHeight:"50px",
                    height:"100%",
                    width:"100%"
                    }}
                    name="message"
                    value={userData.message}
                    onChange={handleInputs}
                    placeholder='message' rows="3"></textarea>
                  </div>
                  </div>
                  <div className="contact_form_button">
                    <button type='submit' 
                    className='button contact_submit_button'
                    onClick={contactForm}>Send message</button>
                  </div>
                
                </form>
              </div> 
            </div>

          </div>
        </div>
      </div>

    </>
  )
}


export default Contact;






// <!--Section: Contact v.2-->
<section class="mb-4">

    {/* <!--Section heading--> */}
    <h2 class="h1-responsive font-weight-bold text-center my-4">Contact us</h2>
    {/* <!--Section description--> */}
    <p class="text-center w-responsive mx-auto mb-5">Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within
        a matter of hours to help you.</p>

    <div class="row">

        {/* <!--Grid column--> */}
        <div class="col-md-9 mb-md-0 mb-5">
            <form id="contact-form" name="contact-form" action="mail.php" method="POST">

                {/* <!--Grid row--> */}
                <div class="row">

                    {/* <!--Grid column--> */}
                    <div class="col-md-6">
                        <div class="md-form mb-0">
                            <input type="text" id="name" name="name" class="form-control"/>
                            <label for="name" class="">Your name</label>
                        </div>
                    </div>
                    {/* <!--Grid column-->

                    <!--Grid column--> */}
                    <div class="col-md-6">
                        <div class="md-form mb-0">
                            <input type="text" id="email" name="email" class="form-control"/>
                            <label for="email" class="">Your email</label>
                        </div>
                    </div>
                    {/* <!--Grid column--> */}

                </div>
                {/* <!--Grid row-->

                <!--Grid row--> */}
                <div class="row">
                    <div class="col-md-12">
                        <div class="md-form mb-0">
                            <input type="text" id="subject" name="subject" class="form-control"/>
                            <label for="subject" class="">Subject</label>
                        </div>
                    </div>
                </div>
                {/* <!--Grid row-->

                <!--Grid row--> */}
                <div class="row">

                    {/* <!--Grid column--> */}
                    <div class="col-md-12">

                        <div class="md-form">
                            <textarea type="text" id="message" name="message" rows="2" class="form-control md-textarea"></textarea>
                            <label for="message">Your message</label>
                        </div>

                    </div>
                </div>
                {/* <!--Grid row--> */}

            </form>

            <div class="text-center text-md-left">
                <a class="btn btn-primary" onclick="document.getElementById('contact-form').submit();">Send</a>
            </div>
            <div class="status"></div>
        </div>
        {/* <!--Grid column-->

        <!--Grid column--> */}
        <div class="col-md-3 text-center">
            <ul class="list-unstyled mb-0">
                <li><i class="fas fa-map-marker-alt fa-2x"></i>
                    <p>San Francisco, CA 94126, USA</p>
                </li>

                <li><i class="fas fa-phone mt-4 fa-2x"></i>
                    <p>+ 01 234 567 89</p>
                </li>

                <li><i class="fas fa-envelope mt-4 fa-2x"></i>
                    <p>contact@mdbootstrap.com</p>
                </li>
            </ul>
        </div>
        {/* <!--Grid column--> */}

    </div>

</section>
{/* <!--Section: Contact v.2--> */}