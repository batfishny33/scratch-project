const router = express.Router();
const userController = require('../controllers/UserController.js');
const express = require('express');

// GET ALL USERS
router.get('/', userController.getAllUsers, (req, res) => {
  res.status(200).json(res.locals.allUsers);
});

// GET SPECIFIC USER
router.get('/:id', userController.getUser, (req, res) => {
  res.status(200).json(res.locals.foundUser);
});

// UPDATE USER INFO
// router.put('/:id', userController.updateUserInfo, (req, res) => {
//   res.status(200).json(res.locals.updatedUser);
// });

// DELETE USER
router.delete('/:id', userController.deleteUser, (req, res) => {
  res.status(200).json(res.locals.deletedUser);
});

// VERIFY USER
// router.get('/:id/:password', userController.verifyUser, (req, res) => {
//   res.status(200).json(res.locals.verifiedUser);
// });

//CREATE USER
router.post('/', userController.createUser, (req, res) => {
  res.status(200).json(res.locals.newUser);
});

module.exports = router;