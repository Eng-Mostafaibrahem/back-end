const Joi=require("joi");
//const { strict } = require("joi/lib/types/lazy");
//const { schema } = require("joi/lib/types/object");
const mongoose=require("mongoose");

const User = mongoose.model("user",mongoose.Schema({
    name:{
        type:String,
        required:true,
        minlenght:5,
        maxlength:25
    },
    email:{
        type: String,
        required:true,
        minlength:5,
        maxligth:255
    },

    password:{
        type: String,
        required:true,
        minlength:8,
        maxligth:255
    }

}));

function validateUser(user){
    const schema= Joi.object({
        name:Joi.string().min(3).max(50).required(),
        email:Joi.string().min(3).max(255).required().email(),
        password:Joi.string().min(8).max(255).required(),
        });

        return schema.validate(user);
    }


    exports.User=User;
    exports.validate=validateUser;