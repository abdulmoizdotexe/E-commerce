const express = require('express');
const {viewLogin, registerUser, loginUser} = require('../controllers/user');

const router = express.Router();

router.get('/', viewLogin);
router.post('/register', registerUser);
router.post('/login', loginUser)

module.exports = router;