// import { Router } from "express";
// import registerUser from "../controllers/user.controller.js";
// const router = Router()

// router.route("/register").post(registerUser)
// export default router



import { Router } from "express";
// 1. Fixed typo: changed "controlllers" to "controllers"
import registerUser from "../controllers/user.controller.js"; 

// 2. Fixed typo: changed "router()" to "Router()"
const router = Router(); 

router.route("/register").post(registerUser);

export default router;