import { Router } from "express";
import * as HikeController from "../controller/hike.controller.js";


const router = Router();



// CREATE HIKE
router.route('/')
    .post(HikeController.add_hike)

// GET ALL HIKES
router.route('/')
    .get(HikeController.list_hikes)

// GET ONE HIKE
router.route('/:id')
    .get(HikeController.list_one_hike)
    .put(HikeController.update_hike)
    .delete(HikeController.delete_hike)



export default router;
