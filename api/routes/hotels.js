import express from 'express';
import { countByCity, countByType, createHotel, deleteHotel, getHotel, getHotelRooms, getHotels, updateHotel } from '../controllers/hotel.js';

import { createError } from '../utils/error.js';
import { verifyAdmin } from '../utils/verifyToken.js';
const router=express.Router();

//Create
router.post("/", createHotel);

//Update
router.put("/:id", updateHotel);

//Delete
router.delete("/:id", deleteHotel);

//GET
router.get("/:id", getHotel);

//GET ALL
router.get("/", getHotels);
router.get("/countByCity", countByCity);
router.get("/countByType", countByType);
router.get("/room/:id", getHotelRooms);

export default router;