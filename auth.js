const {User} = require('../models/user');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const _=require('lodash');
const express = require('express');
const router = express.Router();
const Joi=require('joi');

router.post('/', async (req, res) => {
  const { error } = validate(req.body); 
  if (error) return res.status(400).send(error.details[0].message);

  let user= await User.findOne({email:req.body.email});
  if(!user) return res.status(404).send("invalid email or password");
  
  const checkpassword= await bcrypt.compare(req.body.password,user.password);
  if(!checkpassword)return res.status(404).send("invalid email or password");
  res.send('ok');
 });

function validate(req){
    const schema= Joi.object({
        email:Joi.string().min(3).max(255).required().email(),
        password:Joi.string().min(8).max(255).required(),
        });

        return schema.validate(req);
    }

    module.exports = router;