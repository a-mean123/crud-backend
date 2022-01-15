const express = require('express');
const router = express.Router();
const User = require('../models/user');

// User
router.post('/ajout', (req,res)=>{

    let userFromPostman = req.body;
    let user = new User(userFromPostman);
    user.save().then(
        (saved)=>{
            console.log('saved user');
            res.send(saved);

        },
        (err)=>{
            console.log(err);
        }
    );


});
router.get('/getall',(req,res)=>{
    User.find().then(
        (users)=>{
            res.send(users)
        },
        (err)=>{
            console.log(err);
        }
    )
});
router.get('/getbyid/:id',(req,res)=>{
    let id=req.params.id;
    User.findById({_id:id}).then(
        (user)=>{
            console.log(`User ${user} found`);
            res.send(user)
        },
        (err)=>{
            console.log(err);
        }
    );
});
router.put('/update/:id', (req,res)=>{
    let id = req.params.id;
    let userToUpdate= req.body;

    User.findByIdAndUpdate({_id:id}, userToUpdate, {new:true}).then(
        (updatedUser)=>{
            res.send(updatedUser);
        },
        (err)=>{
            res.send(err);
        }
    );
});
router.delete('/delete/:id',(req,res)=>{
    id= req.params.id;
    User.findByIdAndDelete({_id:id}).then(
        (deletedUser)=>{
            console.log(`User ${deletedUser} deleted`);
            res.send(deletedUser);
        },
        (err)=>{
            res.send(err);
        }
    );
});

module.exports = router;