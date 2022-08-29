const router = require("express").Router();
//use model user to save new user
const User = require("../models/User");
//use bcrypt to hash password
const bcrypt = require("bcrypt");

//Signup
router.post("/signup", async (req,res)=>{
 try{
    //generate new password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
        //Create new user
        const newUser = new User({
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            email: req.body.email,
            password: hashedPassword,
        });
    //save user and return response
    const user = await newUser.save();
    res.status(200).json(user);
} catch(err){
    res.status(500).json(err)
}
});

//Login
router.post("/login", async (req, res) => {
    try {
      const user = await User.findOne({ email: req.body.email });
      !user && res.status(404).json("user not found");
      console.log(user.password)
  
      const validPassword = await bcrypt.compare(req.body.password, user.password)
      !validPassword && res.status(400).json("wrong password")
  
    if (validPassword) res.status(200).json(user)
    } catch (err) {
        res.status(500).json(err)
    }
  });
  

module.exports = router