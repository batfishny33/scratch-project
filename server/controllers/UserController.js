const User = require('../models/User.js');

const userController = {};
// sends list of all users
userController.getAllUsers = async (req, res, next) => {
  // const {  } = req.params;?
  try {
    res.locals.allUsers = await User.find();
  }
  catch(err) {
    return next({
      log: 'Users display error',
      status: 400,
      message: { err: 'An error occurred' }
    });
  }
}

// sends a specific user by id
userController.getUser = async (req, res, next) => {
  const { id } = req.params;
  try {
    res.locals.foundUser = await User.findOne({ username: id });
    return next();
  }
  catch(err) {
    return next({
      log: 'User find error',
      status: 400,
      message: { err: 'An error occurred' }
    });
  }
}
//Tristyn
// updates user data (adding likes or matches)
// userController.updateUserInfo = async (req, res, next) => {
//   const { id } = req.params;
//   try {
//     res.locals.updatedUser = await User.findOneAndUpdate({ username: id }, {});
//     return next();
//   }
//   catch(err) {
//     return next({
//       log: 'User update error',
//       status: 400,
//       message: { err: 'An error occurred' }
//     });
//   }
// }

// delete user account
userController.deleteUser = async (req, res, next) => {
  const { id } = req.params;
  try {
    res.locals.deletedUser = await User.deleteOne({ username: id });
    return next();
  }
  catch(err) {
    return next({
      log: 'User deletion error',
      status: 400,
      message: { err: 'An error occurred' }
    });
  }
}
//Tristyn
// userController.verifyUser = async (req, res, next) => {
//   const { id, password } = req.params;
//   try {
//     res.locals.verifiedUser = await User.findOne({ username: id, password: password });
//     return next();
//   }
//   catch(err) {
//     return next({
//       log: 'User verification error',
//       status: 400,
//       message: { err: 'An error occurred' }
//     });
//   }
// }

userController.createUser = async (req, res, next) => {
  const { age, fullName, username, password, likedMe, likedUsers, matches, imgURL, bio, techStack } = req.body;
  try {
    res.locals.newUser = await User.create({ 
      age: age, 
      fullName: fullName, 
      username: username, 
      password: password, 
      likedMe: likedMe, 
      likedUsers: likedUsers, 
      matches: matches, 
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
      message: { err: 'An error occurred' }
    });
  }
}

module.exports = userController;



