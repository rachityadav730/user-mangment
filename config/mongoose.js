const mongoose =require("mongoose");

mongoose.connect("mongodb://localhost:27017/userdata", { useNewUrlParser: true, useUnifiedTopology: true })

const db =mongoose.connection;

db.on("error",console.error.bind("error to connect with database"));

db.once("open",function(){console.log("database is successfully connected")});