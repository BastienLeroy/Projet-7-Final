const express = require('express');
const router = express.Router();
const multer = require('../middlewares/multer');
const authMiddleware = require('../middlewares/auth');

const postCtrl = require('../controllers/post');

router.get('/getAllPosts', authMiddleware, postCtrl.getAllPosts);
router.post('/createPost', authMiddleware, multer, postCtrl.createPost);
router.put('/modifyPost', authMiddleware, multer, postCtrl.modifyPost);
router.delete('/deletePost', authMiddleware, postCtrl.deletePost);

module.exports = router;
