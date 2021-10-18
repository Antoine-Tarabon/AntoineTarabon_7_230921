const router = require('express').Router();
const userCtrl = require('../controllers/user');
const uploadCtrl = require('../controllers/upload');
const multer = require("multer");
const upload = multer();

// user 
router.get('/', userCtrl.getAllUsers);
router.get('/:id', userCtrl.userInfo);
router.put("/:id", userCtrl.updateUser);
router.delete('/:id', userCtrl.deleteUser);
router.patch('/follow/:id', userCtrl.follow);
router.patch('/unfollow/:id', userCtrl.unfollow);

// upload
router.post("/upload", upload.single("file"), uploadCtrl.uploadProfil);

module.exports = router;