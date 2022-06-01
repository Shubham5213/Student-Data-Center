import React from "react";
require("./Detailcard.css")
const Detailcard = (props) => {
  return (
    <>
      
      <div className="card1 col-3" key={props._id}>
       {/* <div style={{width:"100%"}}></div> */}
      <div className="container2">
        <h4><b>Name:{props.name}</b></h4>
        <p>Phone:{props.phone}</p>
        <p>Email:{props.email}</p>
        <p>profession:{props.work}</p>
      </div>
</div>
    </>
  );
};

export default Detailcard;
