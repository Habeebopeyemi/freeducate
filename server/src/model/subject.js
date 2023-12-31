const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const subjectSchema = Schema({
  name: {
    type: String,
    required: true,
  },
  topics: [
    {
      type: Schema.Types.ObjectId,
      ref: "Topic",
    },
  ],
});

module.exports = mongoose.model("Subject", subjectSchema)