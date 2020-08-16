const mongoose = require('mongoose')

const ShopSchema = new mongoose.Schema ({
    name:{type:String},
    image:String,
    price:Number,
    owned:{type:Boolean,default:false}
    
})


module.exports = mongoose.model('shop', ShopSchema)