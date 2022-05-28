const router = express.Router();
const userController = require('../controllers/UserController.js');

// GET ALL USERS
router.get('/', userController.getAllUsers, (req, res) => {
  console.log('hi users :D');
});

// GET SPECIFIC USER
router.get('/:id', userController.getUser, (req, res) => {
  console.log('hiiiii :D');
});

// UPDATE USER INFO
router.put('/:id', userController.updateUserInfo, (req, res) => {
  console.log(':DDDD');
});

// DELETE USER
router.delete('/:id', userController.deleteUser, (req, res) => {
  console.log('Hello, world');
});

module.exports = router;