const mongoose = require('mongoose')

const DailySchema = new mongoose.Schema ({
    input:{type:String},
    completed:{type:Boolean, default:false}
})


module.exports = mongoose.model('daily', DailySchema)