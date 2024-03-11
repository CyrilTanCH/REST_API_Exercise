const Student = require("../model/school");
const Teacher = require("../model/school");

// Student

// Create Student
const createStudent = async (req, res) => {
  const {
    name,
    dob,
    level: { grade },
    level: { subject },
    level: { grading },
    level: { teacher },
  } = req.body;

  try {
    const student = await Student.create({
      name,
      dob,
      level: grade,
      level: subject,
      level: grading,
      level: teacher,
    });
    res.status(200).json(student);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Read All Students
const getAllStudents = async (req, res) => {
  try {
    const students = await Student.find();

    res.status(200).json({
      count: students.length,
      students,
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Read A Specific Student
// http://localhost:4000/api/students/<object_id>
const getStudent = async (req, res) => {
  const { id } = req.params;

  try {
    const student = await Student.findById({ _id: id });
    if (!student) return res.status(404).json({ error: "Student not found." });

    res.status(200).json(student);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

/// Update Student
const updateStudent = async (req, res) => {
  const { id } = req.params;

  try {
    const student = await Student.findByIdAndUpdate(
      { _id: id },
      { ...req.body },
      { new: true, runValidators: true }
    );

    if (!student)
      return res.status(404).json({ error: "No matching student found." });

    res.status(200).json({
      message: "The student has been successfully updated.",
      student,
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete Student
const deleteStudent = async (req, res) => {
  const { id } = req.params;
  try {
    const student = await Post.findByIdAndDelete({ _id: id });

    if (!student)
      return res.status(404).json({ error: "No matching student found." });

    res
      .status(200)
      .json({ message: "The student has been successfully removed." });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Teacher

// Create Teacher
const createTeacher = async (req, res) => {
  const {
    name,
    capability: { subject },
    capability: { grade },
  } = req.body;

  try {
    const teacher = await Teacher.create({
      name,
      capaibility: subject,
      capability: grade,
    });
    res.status(200).json(teacher);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Read All Teachers
const getAllTeachers = async (req, res) => {
  try {
    const teachers = await Teacher.find();

    res.status(200).json({
      count: teachers.length,
      teachers,
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Read A Specific Teacher
// http://localhost:4000/api/teachers/<object_id>
const getTeacher = async (req, res) => {
  const { id } = req.params;

  try {
    const teacher = await Teacher.findById({ _id: id });
    if (!teacher) return res.status(404).json({ error: "Teacher not found." });

    res.status(200).json(teacher);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

/// Update Teacher
const updateTeacher = async (req, res) => {
  const { id } = req.params;

  try {
    const teacher = await Teacher.findByIdAndUpdate(
      { _id: id },
      { ...req.body },
      { new: true, runValidators: true }
    );

    if (!teacher)
      return res.status(404).json({ error: "No matching teacher found." });

    res.status(200).json({
      message: "The teacher has been successfully updated.",
      teacher,
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete Teacher
const deleteTeacher = async (req, res) => {
  const { id } = req.params;
  try {
    const teacher = await Teacher.findByIdAndDelete({ _id: id });

    if (!teacher) return res.status(404).json({ error: "Teacher not found." });

    res
      .status(200)
      .json({ message: "The teacher has been successfully removed." });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
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
};
