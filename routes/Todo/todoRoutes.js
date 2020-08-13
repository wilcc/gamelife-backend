const express = require('express');
const router = express.Router();
const Todo = require('./model/Todo');


router.get('/all',(req,res)=>{
    Todo.find({}).then((todo) => {
        todo.reverse();
        return res.json(todo);
      });
})

router.post('/create',(req,res)=>{
    const newTodo = new Todo
    newTodo.input = req.body.input
    newTodo.save().then((todo)=>{
        return res.json(todo)
    })
})

router.delete('/remove/:id',(req, res) => {
    Todo.findByIdAndDelete({ _id: req.params.id }).then(
      res.json({ message: 'deleted' })
    );
  })


  module.exports = router