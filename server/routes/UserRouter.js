const express = require('express');
const router = express.Router();
const userController = require('../controllers/UserController.js');


// Search For Users (for filtering preferences)
router.get('/search', userController.searchUsers, (req, res) => {
  res.status(200).send(res.locals.queryUsers);
})

// GET ALL USERS
router.get('/', userController.getAllUsers, (req, res) => {
  res.status(200).send(res.locals.allUsers)
});

// CREATE USER
router.post('/', userController.createUser, (req, res) => {
  res.status(200).send(res.locals.createdUser);
})

// LOGIN USER
router.post('/signin', userController.verifyUser, (req, res) => {
  res.status(200).send(res.locals.loggedIn);
})

// GET SPECIFIC USER
router.get('/:id', userController.getUser, (req, res) => {
  res.status(200).send(res.locals.user);
});

// // UPDATE USER INFO
// router.put('/:id', userController.updateUserInfo, (req, res) => {
//   console.log(':DDDD');
// });

// // DELETE USER
// router.delete('/:id', userController.deleteUser, (req, res) => {
//   console.log('Hello, world');
// });

module.exports = router;