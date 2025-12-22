import express from "express";
import {
  createEvent,
  getUpcomingEvents,
  getPastEvents,
  getEventsByMonth,
  updateEvent,
  deleteEvent,
} from "../controllers/event.controller.js";

const router = express.Router();

// create
router.post("/", createEvent);

// lists
router.get("/upcoming", getUpcomingEvents);
router.get("/past", getPastEvents);
router.get("/calendar", getEventsByMonth);

// update & delete
router.put("/:id", updateEvent);
router.delete("/:id", deleteEvent);

export default router;
