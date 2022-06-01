const express = require("express");
const jwt = require("jsonwebtoken");
const router = express.Router();
const bcrypt = require("bcrypt");
const cookieParser =require("cookie-parser");
router.use(cookieParser());
const authenticate = require("../middleware/authenticate");
const saltRounds =10;


require("../db/conn");
const User = require("../model/userSchema");
const { hash } = require("bcrypt");



// router.get("/", (req,res)=>{
//     res.send("Hello World! router");
// });


// router.post("/register",(req,res)=>{
//     // object destructuring...
//     const {name, email, phone, work, password, cpassword} = req.body;

//     if(!name || !email || !phone || !work || !password || !cpassword){
//         return res.status(422).json({error: "fill the blank"});
//     }
//     User.findOne({email:email}).then((userExist)=>{
//         if(userExist){
//             return res.status(422).json({error: "Email already registered!"})
//         }

//         const user = new User({name, email, phone, work, password, cpassword});
//         user.save().then(()=>{
//             res.status(201).json({message: "registered successfully!"})
//         }).catch((err)=>res.status(500).json({error: "Failed tp register"}));

//     }).catch(err=>{console.log(err); });
    

// });

    
// ayns await .....

router.post("/register", async(req,res)=>{
    // object destructuring...
    let {name, email, phone, work, password, cpassword} = req.body;

    if(!name || !email || !phone || !work || !password || !cpassword){
        return res.status(422).json({error: "fill the blank"});
    }
    try{
        const userExist = await User.findOne({email:email});
        if(userExist){
            return res.status(422).json({error: "Email already registered!"})
        }else if(password != cpassword){
            return res.status(422).json({error: "Try Again"})
        }else{
            bcrypt.hash(password, saltRounds, (err, hash)=> {
                password = hash;
            });
            bcrypt.hash(cpassword, saltRounds, (err, hash)=> {
                cpassword = hash;
            });
            const user = new User({name, email, phone, work, password, cpassword});
// bcrypt password
            const userRegister = await user.save();

            if (userRegister) {
                res.status(201).json({ message: "user registered successfully" });
            } else {
                res.status(500).json({ error: "Failed to Registered" });
            }
        }

    }catch(err){
        console.log(err);
    }

});

router.post('/signin',async(req,res)=>{
    
    try{
        const {email, password} = req.body;
        if(!email || !password){
            return res.status(400).json({error: "Enter all Details!"});
        }
        const userLogin = await User.findOne({email:email});
        
        if(userLogin){
            const token = await userLogin.generateAuthToken();
            
            res.cookie("jwtoken", token, {
                expires:new Date(Date.now() +25892000000),
                httpOnly:true
            });

            await bcrypt.compare(password,userLogin.password,(err,result)=>{
            if(!result){
                res.status(422).json({error: "Invalid Credientials *"})
            }else{
                res.json({message:"user signin success!"});
            }
        });
        }else{
            res.status(400).json({error: "Invalid Credientials *"});
        }
        

        
    }catch(err){
        console.log(err);
    }
});

// About us page
router.get("/about", authenticate ,(req,res)=>{
    res.send(req.rootUser);
});

// get userdatafor contact
router.get("/getdata", authenticate ,(req,res)=>{
    res.send(req.rootUser);
});

// contact page
router.post("/contact",authenticate, async (req,res)=>{
    try{
        const {name, email, phone, message} = req.body;
        if(!name || !email || !phone || !message){
            console.log("error in contact form");
            return res.json({error : "plz fill the contact form"})
        }

        const userContact = await User.findOne({_id : req.userID});
        if(userContact){
            const userMessage = await userContact.addMessage(name, email, phone, message);
            await userContact.save();
            res.status(201).json({messages : "user Contact Success!"}) 
        }

    }catch(err){
        console.log(err);
    }
});


// to send data to home and contact us page
router.get("/alldata", authenticate, async (req, res) => {
  try {
    const data = await User.find();
    res.send(data);
  } catch (err) {
    console.log(err);
  }
});

router.get("/logout",(req,res)=>{
    res.clearCookie("jwtoken", {path:"/"})
    res.status(200).send("user logout");
});






module.exports = router;