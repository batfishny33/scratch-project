const { findOneAndUpdate } = require('../models/User.js');
const User = require('../models/User.js');

const userController = {};

// Querys Specific User
userController.searchUsers = async (req, res, next) => {
  const { query, queryFilter } = req.query;
  try {
    const result = await User.find({})
    return next();
  }
  catch (err) {
    return next({
      log: 'User search error',
      status: 400,
      message: { err: err }
    });
  }
}

// sends list of all users
userController.getAllUsers = async (req, res, next) => {
  try {
    res.locals.allUsers = await User.find();
    return next();
  }
  catch (err) {
    return next({
      log: 'Users display error',
      status: 400,
      message: { err: err }
    });
  }
}

// sends a specific user by id
userController.getUser = async (req, res, next) => {
  const { id } = req.params;
  try {
    res.locals.foundUser = await User.findOne({ _id: id });
    return next();
  }
  catch (err) {
    return next({
      log: 'Could not find user',
      status: 400,
      message: { err: err },
    })
  }
};

// VERIFY USER SIGNED IN
userController.verifyUser = async (req, res, next) => {
  const { username, password } = req.body;
  try {
    const result = await User.find({ username: username, password: password });
    result.length === 0 ? res.locals.loggedIn = 'User Not Found' : res.locals.loggedIn = result;
    return next();
  }
  catch (err) {
    return next({
      log: 'User find error',
      status: 400,
      message: { err: err }
    });
  }
}

// delete user account
userController.deleteUser = async (req, res, next) => {
  const { id } = req.params;
  try {
    res.locals.deletedUser = await User.deleteOne({ _id: id });
    return next();
  }
  catch (err) {
    return next({
      log: 'User deletion error',
      status: 400,
      message: { err: err }
    });
  }
}


// // updates user data (adding likes or matches)
userController.updateUserLikes = async (req, res, next) => {
  const { likerID, likedID } = req.query;
  // /users/likes?likerID=2382193?likedID=293193193
  try {
    // OUR LIKES
    res.locals.updatedUserLikes = await findOneAndUpdate({ _id: likedID }, { $push: { likedMe: likerID } });
    // PERSON WE LIKED
    res.locals.updatedUserLikes2 = await findOneAndUpdate({ _id: likerID }, { $push: { likedUsers: likedID } });
    return next();
  }
  catch (err) {
    return next({
      log: 'Profile like error',
      status: 400,
      message: { err: err }
    });
  }
}

userController.updateUserMatches = async (req, res, next) => {
  const { likerID, likedID } = req.query;
  // /users/likes?likerID=2382193?likedID=293193193
  try {
    let result1 = await User.findById(likerID);
    let result2 = await User.findById(likedID);
    if (result1.likedMe.includes(likedID) && result2.likedMe.includes(likerID)) {
      // UPDATE USER 1 MATCHES
      res.locals.updatedUserMatches = await findOneAndUpdate({ _id: likerID }, { $push: { matches: likedID } });
      // UPDATE USER 2 MATCHES
      res.locals.updatedUserMatches = await findOneAndUpdate({ _id: likedID }, { $push: { matches: likerID } });
    }
    return next();
  }
  catch (err) {
    return next({
      log: 'Profile match error',
      status: 400,
      message: { err: err }
    });
  }
}

userController.createUser = async (req, res, next) => {
  const { age, fullName, gender, username, password, phone, imgURL, bio, techStack } = req.body;
  console.log(req.body);
  try {
    res.locals.newUser = await User.create({
      age: age,
      fullName: fullName,
      gender: gender,
      username: username,
      password: password,
      phone: phone,
      imgURL: imgURL,
      bio: bio,
      techStack: techStack,
    });
    return next();
  }
  catch (err) {
    return next({
      log: 'User creation error',
      status: 400,
      message: { err: err }
    });
  }
}

module.exports = userController;



