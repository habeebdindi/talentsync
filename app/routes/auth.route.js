const express = require('express');
const router = express.Router();
const { verifySignup } = require('../middleware');
const controller = require('../controllers/auth.controller');

router.post('/login', controller.signin);
router.post('/signup', [verifySignup.duplicateCredentials], controller.signup);

module.exports = router;
