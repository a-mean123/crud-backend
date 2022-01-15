const express= require('express');
const Product = require('../models/product');
const multer = require('multer');

const router = express.Router();

filename = '';



const storage1 = multer.diskStorage(
    {
      destination: './upload',
      filename: function (req, file, cb) {
        date = Date.now();
        let fl = date + '.' + file.mimetype.split('/')[1];
        cb(null, fl );
        
        filename = fl;
      },
    }
  );

  const upload = multer({ storage: storage1 });




// Product
// router.post('/ajout', upload.single('image') ,(req,res)=>{

//     let productFromPostman = req.body;
//     let product = new Product(productFromPostman);

//     product.image= filename;
//     product.save().then(
//         (saved)=>{
//             filename = '';
//             console.log('saved product');
//             res.send(saved);

//         },
//         (err)=>{
//             console.log(err);
//         }
//     );


// });



router.post('/ajout' ,(req,res)=>{

    let productFromPostman = req.body;
    let product = new Product(productFromPostman);

  
    product.save().then(
        (saved)=>{
           
            console.log('saved product');
            res.send(saved);

        },
        (err)=>{
            console.log(err);
        }
    );


});
router.get('/getall',(req,res)=>{
    Product.find().then(
        (products)=>{
            res.send(products)
        },
        (err)=>{
            console.log(err);
        }
    )
});
router.get('/getbyid/:id',(req,res)=>{
    let id=req.params.id;
    Product.findById({_id:id}).then(
        (product)=>{
            console.log(`product ${product} found`);
            res.send(product)
        },
        (err)=>{
            console.log(err);
        }
    );
});
router.put('/update/:id', (req,res)=>{
    let id = req.params.id;
    let productToUpdate= req.body;

    Product.findByIdAndUpdate({_id:id}, productToUpdate, {new:true}).then(
        (updatedproduct)=>{
            res.send(updatedproduct);
        },
        (err)=>{
            res.send(err);
        }
    );
});
router.delete('/delete/:id',(req,res)=>{
    id= req.params.id;
    Product.findByIdAndDelete({_id:id}).then(
        (deletedproduct)=>{
            console.log(`product ${deletedproduct} deleted`);
            res.send(deletedproduct);
        },
        (err)=>{
            res.send(err);
        }
    );
});


module.exports= router;
