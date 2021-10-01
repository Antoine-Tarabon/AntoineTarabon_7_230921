const router = require('express').Router();
const userCtrl = require('../controllers/user')

// user display: 'block',
router.get('/', userCtrl.getAllUsers);
router.get('/:id', userCtrl.userInfo);
router.put("/:id", userCtrl.updateUser);
router.delete('/:id', userCtrl.deleteUser);
router.patch('/follow/:id', userCtrl.follow);
router.patch('/unfollow/:id', userCtrl.unfollow);

module.exports = router;