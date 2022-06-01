require('dotenv').config()
const express = require("express");
const app= express();
const mongoose = require("mongoose");

require("./db/conn");

app.use(express.json());
const User = require("./model/userSchema");
app.use(require("./route/auth"));


// step2 : heroku
const PORT = process.env.PORT || 5000;

// app.get("/about", middleware, (req,res)=>{

//     res.send("this is About me page.");
// });
// app.get("/contact", (req,res)=>{
//     res.send("Conatct page");
// });
// app.get("/register", (req,res)=>{
//     res.send("This is login page!");
// });
app.get("/signup", (req,res)=>{
    res.send("This is register page!");
});


// step 2: heroku
if(process.env.NODE_ENV === "production"){
    app.use(express.static("client/build"));
}




app.listen(PORT,()=>{
    console.log("server is Up on port 3000!");
});




// ZxW0BNe6qdNcMa2W