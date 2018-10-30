const mongoose = require("mongoose");
const timestampPlugin = require("./plugins/timestamp");
const DeveloperSchema = new mongoose.Schema({
  _id: mongoose.Schema.ObjectId,
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  userName: {
    type: String,
    required: true
  },
  emailAddress: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  state: {
    type: String,
    required: true
  },
  isDev: {
    type: Boolean,
    default: true
  }
});

DeveloperSchema.plugin(timestampPlugin);

const Developer = mongoose.model("Developer", DeveloperSchema);

module.exports = Developer;
