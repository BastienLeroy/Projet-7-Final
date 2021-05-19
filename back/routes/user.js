const express = require('express');
const router = express.Router();
const multer = require('../middlewares/multer');
const authMiddleware = require('../middlewares/auth');

const userCtrl = require('../controllers/user');

router.post('/update', authMiddleware, multer, userCtrl.modifyUser);
router.delete('/delete', authMiddleware, userCtrl.deleteUser);

module.exports = router;
