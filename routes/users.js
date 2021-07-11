const express =require("express");

const router =express.Router();
const userController =require("../controller/user_controller");


router.get("/sign-in",userController.signIn);
router.post("/create",userController.create);
router.post("/session",userController.session);

router.post("/profile",userController.profile);
router.post("/sign-in",userController.signIn);
router.get("/signout",userController.signOut);

router.get("/sign-up",userController.signUp);
// router.post("/sign-up",userController.signIn);

module.exports = router;