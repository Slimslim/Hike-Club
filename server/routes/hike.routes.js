import { Router } from "express";
import * as userConroller from "../controllers/user.controller.js";
import * as HikeController from '../controllers/hike.controller.js';
import authenticate from "jsonwebtoken";

const router = Router();

router.post("/register", userConroller.register);
router.post("/login", userConroller.login);
router.post("/logout", userConroller.logout);
router.get("/get_user_info_by_id/:id", userConroller.getLoggedInUserById);

router.get('/hike', HikeController.list_hikes);
router.get('/hike/:id', HikeController.list_one_hike);
router.post('/hike/add_hike', HikeController.add_hike);
router.put('/hike/:id', HikeController.update_hike);
router.delete('/hike/:id', HikeController.delete_hike);

export default router;
