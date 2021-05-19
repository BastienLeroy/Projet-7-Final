const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/auth');

const authCtrl = require('../controllers/auth');

router.get('/checklogged', authCtrl.checklogged);
router.get('/disconnect', authMiddleware, authCtrl.disconnect);
router.post('/signup', authCtrl.signup);
router.post('/signin', authCtrl.signin);

module.exports = router;
