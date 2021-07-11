const express =require("express");

const router =express.Router();
const homeController =require("../controller/home.controller")

console.log("router loaded");
router.get("/",homeController.home)
router.use("/user",require("./users"))


module.exports =router;

