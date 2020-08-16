const mongoose = require('mongoose')

const TodoSchema = new mongoose.Schema ({
    input:{type:String},
    completed:{type:Boolean, default:false}
})


module.exports = mongoose.model('todo', TodoSchema)