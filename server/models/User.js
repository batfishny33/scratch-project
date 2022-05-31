require('dotenv').config();
const mongoose = require('mongoose');
const { Schema } = mongoose;

mongoose.connect(
  process.env.MONGO_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
).then(() => {
  console.log('Connected to DB');
});

const userSchema = new Schema({
  age: {type: Number, required: true, unique: false},
  fullName: {type: String, required: true, unique: false},
  gender: {type: String, required: true, unique: false},
  username: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  phone: {type: String, required: true},
  likedMe: {type: [String], default: []},
  likedUsers: {type: [String], default: []},
  matches: {type: [String], default: [], unique: false},
  imgURL: {type: [String], required: true},
  bio: {type: String, unique: false, default: ''},
  techStack: {type: [String], default: [], unique: false},
});

module.exports = mongoose.model('User', userSchema);