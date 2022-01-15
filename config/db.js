require('dotenv').config();
const mongoose = require('mongoose');
mongoose.connect(process.env.DATABASE_URL).then(
    ()=>{
        console.log('Connected to the database homework');
    }
    ,
    (err)=>{
        console.log(err);
    }
);