const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Schema for DevStart Users

const user = new Schema({
  uid: Number,
  firstName: String,
  lastName: String,
  state: String,
  email: String,
  password: Mixed,
  profileImg: Mixed,
  isDev: Boolean,
  profileInfo: {
    gitHubURL: String,
    portfolioURL: String,
    education: String,
    highestDegree: String,
    certifications: Array,
    skills: Array,
    ratings: Array,
    avgRating: Number
  },
  friends: Array,
  teams: Array
});
