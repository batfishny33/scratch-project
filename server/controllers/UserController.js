const User = require('../models/User.js');

const userController = {};

// sends list of all users
userController.getAllUsers = async (req, res, next) => {
  try {
    const result = await User.find();
  }
  catch(err) {

  }
}

// sends a specific user by id
userController.getUser = () => {

}

// updates user data (adding likes or matches)
userController.updateUserInfo = () => {

}

// delete user account
userController.deleteUser = () => {

}


module.exports = userController;



