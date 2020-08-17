const express = require('express');
const router = express.Router();
const Daily = require('./model/Daily');


router.get('/all',(req,res)=>{
    Daily.find({}).then((daily) => {
        daily.reverse();
        return res.json(daily);
      });
})

router.post('/create',(req,res)=>{
    const newDaily = new Daily
    newDaily.input = req.body.input
    newDaily.save().then((daily)=>{
        return res.json(daily)
    })
})
router.put('/complete/:id',(req,res)=>{
  Daily.findById({_id: req.params.id}).then((found)=>{
    found.completed = true
    found.save().then((saved)=>{
      console.log(saved)
      return res.json(saved)
    })
  })
})
router.delete('/remove/:id',(req, res) => {
    Daily.findByIdAndDelete({ _id: req.params.id }).then(
      res.json({ message: 'deleted' })
    );
  })


  module.exports = router