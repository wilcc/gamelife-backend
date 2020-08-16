const express = require('express');
const router = express.Router();
const Shop = require('./model/Shop');
const Todo = require('../Todo/model/Todo');

router.get('/all',(req,res)=>{
    Todo.find({}).then((shop) => {
        shop.reverse();
        return res.json(shop);
      });
})

router.put('/purchased/:id',(req,res)=>{
    Shop.findOne
})



module.exports = router
