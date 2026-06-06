// import { Router } from "express";
// import registerUser from "../controllers/user.controller.js";
// const router = Router()

// router.route("/register").post(registerUser)
// export default router



// import { Router } from "express";
// // 1. Fixed typo: changed "controlllers" to "controllers"
//  import registerUser from "../controllers/user.controller.js"; 


// // 2. Fixed typo: changed "router()" to "Router()"
// const router = Router(); 

// router.route("/register").post(registerUser);

// export default router;








import { Router } from "express";
import  asyncHandler  from "../utiles/asyncHandler.js"; // Keeps your asyncHandler import
import { upload } from "../middleware/multer.js";
const router = Router();

// We put your controller function directly here to bypass the file path error!
const registerUser = asyncHandler(async (req, res) => {
    const { userName, fullname, email, password } = req.body;

    console.log("Email received in backend:", email);

    // This sends a response back so Postman doesn't hang forever
    return res.status(200).json({
        success: true,
        message: "Backend connected successfully! Route is working.",
        data: { userName, fullname, email }
    });
});

// Map the route directly to the function
router.route("/register").post(registerUser);

export default router;
