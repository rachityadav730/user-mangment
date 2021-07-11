const mongoose =require("mongoose");

const userSchema = new mongoose.Schema({
    email:{
        type:String,
        require:true,
        uniqued:true
    },
    name:{
        type:String,
        
    },
    password:{
        type:String,
        require:true
    }
},{
    timestamps:true
})


const User =mongoose.model("userd",userSchema);

module.exports =User;