import express from "express";
import { addSchool, getSchools } from "../controllers/schoolController.js";
import { upload } from "../middleware/upload.js";

const router = express.Router();

// use upload.single("imageFile") to handle file
router.post("/addschool", upload.single("imageFile"), addSchool);
router.get("/schools", getSchools);

export default router;
