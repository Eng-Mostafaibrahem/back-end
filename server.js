const Joi = require("joi");
const mongoose = require("mongoose");
const user=require("./routes/user");
const auth=require("./routes/auth");
const express=require('express');
const app = express();

//mongodb+srv://admin:project123@cluster0.mqiiy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
mongoose.connect("mongodb://localhost:27017/project",{ useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("successfull connect with database"))
    .catch(err => console.error("failed...somthing wrong", err));

app.use(express.json());
app.use("/api/users",user);
app.use("/api/auth",auth);


const port = process.env.port || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));