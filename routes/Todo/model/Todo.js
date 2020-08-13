const mongoose = require('mongoose')

const TodoSchema = new mongoose.Schema ({
    input:{type:String}
})


module.exports = mongoose.model('todo', TodoSchema)