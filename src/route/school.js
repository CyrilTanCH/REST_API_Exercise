const express = require("express");
const router = express.Router();
const {
  createStudent,
  getAllStudents,
  getStudent,
  updateStudent,
  deleteStudent,
  createTeacher,
  getAllTeachers,
  getTeacher,
  updateTeacher,
  deleteTeacher,
} = require("../controller/school");

// http://localhost:4000/api/students/ (POST)
router.post("/", createStudent);
// http://localhost:4000/api/students/ (GET)
router.get("/", getAllStudents);
// http://localhost:4000/api/students/<object_id> (GET)
router.get("/:id", getStudent);
// http://localhost:4000/api/students/<object_id> (PATCH)
router.patch("/:id", updateStudent);
// http://localhost:4000/api/students/<object_id> (DELETE)
router.delete("/:id", deleteStudent);

// http://localhost:4000/api/teachers/ (POST)
router.post("/", createTeacher);
// http://localhost:4000/api/teachers/ (GET)
router.get("/", getAllTeachers);
// http://localhost:4000/api/teachers/<object_id> (GET)
router.get("/:id", getTeacher);
// http://localhost:4000/api/teachers/<object_id> (PATCH)
router.patch("/:id", updateTeacher);
// http://localhost:4000/api/teachers/<object_id> (DELETE)
router.delete("/:id", deleteTeacher);

module.exports = router;
