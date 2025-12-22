import Event from "../models/Event.model.js";
import { getTodayStart } from "../utils/date.js";

// create event
export const createEvent = async (req, res) => {
  try {
    const { title, description, location, date, time } = req.body;

    if (!title || !description || !location || !date || !time) {
      return res.status(400).json({ error: "All fields are required" });
    }

    // Normalize date to midnight
    const normalizedDate = new Date(date);
    normalizedDate.setHours(0, 0, 0, 0);

    const event = await Event.create({
      title,
      description,
      location,
      date: normalizedDate,
      time,
    });

    res.status(201).json({
      message: "Event created successfully",
      event,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to create event" });
  }
};

// upcoming event
export const getUpcomingEvents = async (req, res) => {
  try {
    const today = getTodayStart();

    const events = await Event.find({
      date: { $gte: today },
    }).sort({ date: 1 });

    res.json(events);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch upcoming events" });
  }
};

// past event
export const getPastEvents = async (req, res) => {
  try {
    const today = getTodayStart();

    const events = await Event.find({
      date: { $lt: today },
    }).sort({ date: -1 });

    res.json(events);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch past events" });
  }
};

// calender month (event)
export const getEventsByMonth = async (req, res) => {
  try {
    const { month, year } = req.query; // month: 0–11

    if (month === undefined || year === undefined) {
      return res.status(400).json({
        error: "Month and year are required",
      });
    }

    const start = new Date(year, month, 1);
    start.setHours(0, 0, 0, 0);

    const end = new Date(year, Number(month) + 1, 0);
    end.setHours(23, 59, 59, 999);

    const events = await Event.find({
      date: { $gte: start, $lte: end },
    }).sort({ date: 1 });

    res.json(events);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch calendar events" });
  }
};

// update event
export const updateEvent = async (req, res) => {
  try {
    const { id } = req.params;

    const updateData = { ...req.body };

    // Normalize date if updated
    if (updateData.date) {
      const normalizedDate = new Date(updateData.date);
      normalizedDate.setHours(0, 0, 0, 0);
      updateData.date = normalizedDate;
    }

    const event = await Event.findByIdAndUpdate(id, updateData, {
      new: true,
    });

    if (!event) {
      return res.status(404).json({ error: "Event not found" });
    }

    res.json({
      message: "Event updated successfully",
      event,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to update event" });
  }
};

// delete event
export const deleteEvent = async (req, res) => {
  try {
    const { id } = req.params;

    const event = await Event.findByIdAndDelete(id);

    if (!event) {
      return res.status(404).json({ error: "Event not found" });
    }

    res.json({ message: "Event deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to delete event" });
  }
};
