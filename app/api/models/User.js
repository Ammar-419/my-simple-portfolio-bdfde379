const mongoose = require('mongoose');
const { type } = require('os');

const userSchema = new mongoose({
   username: {
    require: true,
    type: string
   },
   password:{
    require:true,
    typr:password
   }

})  
module.export = mongoose.model('user' , userSchema)
