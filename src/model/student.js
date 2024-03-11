const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  dob: { type: Date, required: true },
  level: [
    {
      grade: { type: String, required: true },
      subject: { type: String, required: true },
      grading: { type: Number, required: true },
      teacher: { type: String, required: true },
    },
  ],
});

const Student = mongoose.model("Student", studentSchema);
