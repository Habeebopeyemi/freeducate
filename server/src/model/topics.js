const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const topicSchema = Schema({
  name: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  subject: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Topic", topicSchema);
