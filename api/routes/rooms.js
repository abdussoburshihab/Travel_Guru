import express from 'express';
import { createRoom, deleteRoom, getRoom, getRooms, updateRoom, updateRoomAvailability } from '../controllers/room.js';
//import { verifyAdmin } from '../utils/verifyToken.js';
const router=express.Router();

//Create
router.post("/:hotelid", createRoom);

//Update
router.put("/:id", updateRoom);
router.put("/availability/:id", updateRoomAvailability);

//Delete
router.delete("/:id/:hotelid", deleteRoom);

//GET
router.get("/:id", getRoom);

//GET ALL
router.get("/", getRooms);



export default router;