const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const adminSchema = Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  designation: {
    type: String,
    default: "admin"
  },
  subjects: [
    {
      type: Schema.Types.ObjectId,
      ref: "Subject",
    },
  ],
  topics: [
    {
      type: Schema.Types.ObjectId,
      ref: "Topic",
    },
  ],
});

module.exports = mongoose.model("Admin", adminSchema);
