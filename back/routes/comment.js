const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/auth');

const commentCtrl = require('../controllers/comment');


router.get('/getAllComments', authMiddleware, commentCtrl.getAllComments);
router.post('/createComment', authMiddleware, commentCtrl.createComment);
router.put('/modifyComment', authMiddleware, commentCtrl.modifyComment);
router.delete('/deleteComment', authMiddleware, commentCtrl.deleteComment)

module.exports = router;
