import React from 'react';
import {Link} from "react-router-dom";
require("./ErrorPage.css");


const Errorpage = () => {
  return (
    <>
     <div id="notfound">
         <div className="notfound">
             <div className="notfound-404">
                 <h1>404</h1>
             </div>
             <h2>oops! page not found</h2>
             <p className='mb-5'>
                 The page you are looking no longer exists, or been removed.
             </p>
             <Link className="nav-link" to="/">back to Homepage...</Link>

         </div>
     </div>

    </>
  )
}

export default Errorpage;