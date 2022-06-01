import React, {useState, useEffect} from 'react';
import Detailcard from "./detailcard";

require("./Home.css");


const Home = () => {

  const [userName,setUserName]= useState("");
  const [show,setshow]= useState(false);
  const [showData , setShowData]=useState([{}]);


      const userHomePage = async ()=>{
        try{
              const res = await fetch("/getdata",{
                method:"GET",
                headers:{
                  "Content-Type": "application/json"
                },
              });

              const data = await res.json();
              setUserName(data.name);
              setshow(true);


              console.log(userName);
            
        }catch(err){
          console.log(err); 
        }
      }


    const CardData= async(props)=>{
        try{
            const res = await fetch('/alldata',{
              method:"GET",
              headers:{
                "Content-Type":"application/json"
              },

            });
            const data = await res.json();
            console.log(data);
            setShowData(data); 

        }catch(err){
          console.log(err);
        }
    }


      useEffect(()=>{
          userHomePage();
          CardData();
      },[])
  return (
    <>
      <div className="home-page">
        <div className='home-div'>
            <p className='mt-5 center'>WELCOME</p>
            <h1>{userName}</h1>
            <h2>{show? "Happy to see you back!" : "We are the Mern Developers"}</h2>
        </div>
      </div>

      <div className="row cards-container">
     { showData.map((e ,index)=>{return(<Detailcard key={`lodacard_${index}`}   name={e.name} email={e.email} phone={e.phone} work={e.work}  />)}
      )}
      </div>
      
    </>
  )
}

export default Home;