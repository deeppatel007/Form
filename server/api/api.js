import express from 'express';
import User from '../schema/User.js';
const router=express.Router();


router.post('/signin', async (req,res,next) => {
    const exist = await User.findOne({ email : req.body.email });
    
    if(exist){
        return res.status(401).json('Email already exist');
    } 
    User.create(req.body)
    .then(data => res.json(data))
    .catch(next => console.log(next));
})

router.post('/login', async (req, res, next) => {
    const user = await User.findOne({email: req.body.email, password: req.body.password});
    console.log(req.body.email);
    if(user)
    {
        return res.status(200).json(`${req.body.email} login successfull`);
    }
    else
    {
        return res.status(401).json('Invalid Login');
    }
})

export default router;