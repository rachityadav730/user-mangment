const User =require("../models/userSchema");


module.exports.create =(req,res)=>{
    User.findOne({email:req.body.email},function(err,user){
        if(err){
            console.log("user is already exist");
        }
        if(!user){
            User.create(req.body,function(err,user){
                if(err){
                    console.log("if something not happen");
                }
                return res.render("signin");
            })
        }
        else{
             return res.redirect("back");
        }
    })
   
}
module.exports.session =(req,res)=>{
    User.findOne({email:req.body.email},function(err,user){
        if(err){
            console.log("oops something went wrong");
        }
        if(user){
        if(user.password !=req.body.password){
            res.redirect("back")
        }
        return res.render("profile");
        }
        else{
            return res.redirect("back");
        }
    })
} 

module.exports.signIn =(req,res)=>{
    res.render("signin");
}
module.exports.signUp =(req,res)=>{
    res.render("signup");
}
module.exports.profile =(req,res)=>{
    res.render("profile");
}

module.exports.signOut =(req,res)=>{
    return res.render("home");
}

