const mongoose = require("mongoose");

const teacherSchema = new mongoose.Schema({
  name: { type: String, required: true },
  capability: [
    {
      subject: { String, required: true },
      grade: { type: String, required: true },
    },
  ],
});

const Teacher = mongoose.model("Teacher", teacherSchema);

module.exports = { Student, Teacher };
