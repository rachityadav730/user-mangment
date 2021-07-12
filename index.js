const express =require("express");
const cookie =require("cookie-parser");
const path = require("path");
const e_session =require("express-session");


const app =express();
const port = process.env.PORT|| 8000;

app.use(express.static('public'))
app.use('/static', express.static(path.join(__dirname, 'public')))
const db =require("./config/mongoose");
const User =require("./models/userSchema");


app.set('view engine','ejs');
app.set('views','./views');
app.use(express.urlencoded());

app.use("/",require("./routes"));
app.listen(port,()=>{
    console.log("server is running at ",port);
})