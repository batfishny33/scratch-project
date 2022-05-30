const User = require('../models/User.js');

const userController = {};

// Querys Specific User
userController.searchUsers = async (req, res, next) => {
  const { query, queryFilter } = req.query;
  try {
    const result = await User.find({ })
  }
  catch(err) {

  }
}

// sends list of all users
userController.getAllUsers = async (req, res, next) => {
  try {
    const result = await User.find();
    // console.log(result);
    res.locals.allUsers = result;
    next();
  }
  catch(err) {
    return next({
      log: 'getAllUsers',
      status: 400,
      message: {err: err},
    })
  }
};

// creates new user
userController.createUser = async (req, res, next) => {
  const { age, fullName, gender, phone, username, password, likedMe, likedUsers,
  matches, imgURL, bio, techStack } = req.body;
  try {
    const result = await User.create({
      age: age,
      fullName: fullName,
      gender: gender,
      username: username,
      password: password,
      phone: phone,
      likedMe: likedMe,
      likedUsers: likedUsers,
      matches: matches,
      imgURL: imgURL,
      bio: bio,
      techStack: techStack
    })
    // console.log(result);
    res.locals.createdUser = result;
    return next();
  }
  catch (err) {
    return next({
      log: 'createUser',
      status: 400,
      message: {err: err},
    })
  }
}

// // sends a specific user by id
userController.getUser = async (req, res, next) => {
  const { id } = req.params;
  try {
    console.log('finding user');
    const result = await User.findById(id);
    console.log(result);
    res.locals.user = result;
    return next();
  }
  catch (err) {
    return next({
      log: 'Couldnt get this user',
      status: 400,
      message: {err: err},
    })
  }
}

// VERIFY USER SIGNED IN
userController.verifyUser = async (req, res, next) => {
  const { username, password } = req.body;
  try {
    const result = await User.find({username: username, password: password});
    result.length === 0 ? res.locals.loggedIn = 'User Not Found' : res.locals.loggedIn = result;
    return next();
  }
  catch(err) {
    return next({
      log: 'failed to verify user',
      status: 400,
      message: {err: err},
    })
  }
}

// // updates user data (adding likes or matches)
// userController.updateUserInfo = () => {

// }

// // delete user account
// userController.deleteUser = () => {

// }


module.exports = userController;



