const express = require('express');
const router = express.Router();
const userController = require('../controllers/UserController.js');
const express = require('express');


// Search For Users (for filtering preferences)
router.get('/search', userController.searchUsers, (req, res) => {
  res.status(200).json(res.locals.queryUsers);
})

// GET ALL USERS
router.get('/', userController.getAllUsers, (req, res) => {
  res.status(200).json(res.locals.allUsers);
});

// LOGIN USER
router.post('/signin', userController.verifyUser, (req, res) => {
  res.status(200).json(res.locals.loggedIn);
})

// GET SPECIFIC USER
router.get('/:id', userController.getUser, (req, res) => {
  res.status(200).json(res.locals.foundUser);
});

// UPDATE USER LIKES INFO
router.put('/likes', userController.updateUserLikes, userController.updateUserMatches, (req, res) => {
  res.status(200).json(res.locals.updatedUserLikes, res.locals.updatedUserLikes2);
});

// DELETE USER
router.delete('/:id', userController.deleteUser, (req, res) => {
  res.status(200).json(res.locals.deletedUser);
});

//CREATE USER
router.post('/', userController.createUser, (req, res) => {
  res.status(200).json(res.locals.newUser);
});

module.exports = router;