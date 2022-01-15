const express = require('express');
const Product = require('../models/product');
const router = express.Router();
router.post('/ajout', (req,res)=>{

    let userFromPostman = req.body;
    let article = new Article(userFromPostman);
    article.save().then(
        (saved)=>{
            console.log('saved article');
            res.send(saved);

        },
        (err)=>{
            console.log(err);
        }
    );


});
router.get('/getall',(req,res)=>{
    Article.find().then(
        (articles)=>{
            res.send(articles)
        },
        (err)=>{
            console.log(err);
        }
    )
});
router.get('/getbyid/:id',(req,res)=>{
    let id=req.params.id;
    Article.findById({_id:id}).then(
        (article)=>{
            console.log(`Article ${article} found`);
            res.send(article)
        },
        (err)=>{
            console.log(err);
        }
    );
});
router.put('/update/:id', (req,res)=>{
    let id = req.params.id;
    let userToUpdate= req.body;

    Article.findByIdAndUpdate({_id:id}, userToUpdate, {new:true}).then(
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
    Article.findByIdAndDelete({_id:id}).then(
        (deletedUser)=>{
            console.log(`Article ${deletedUser} deleted`);
            res.send(deletedUser);
        },
        (err)=>{
            res.send(err);
        }
    );
});
module.exports = router;