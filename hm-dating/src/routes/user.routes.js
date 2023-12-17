import { Router } from "express";
import {
  registerUser,
  loginUser,
  logoutUser,
  getAllUsers,
  updateProfile,
} from "../controllers/user.controller.js";
import { upload } from "../middlewares/multer.middleware.js";
import { isAuthenticatedUser, authorizeRoles } from "../middlewares/auth.js";

const router = Router();

router.route("/register").post(
  upload.fields([
    {
      name: "avatar",
      maxCount: 1,
    },
  ]),
  registerUser
);

router.route("/login").post(loginUser);
router.route("/logout").get(logoutUser);
router.route("/all/user").get(getAllUsers);
router.route("/me/update").put(isAuthenticatedUser, updateProfile);

export default router;
