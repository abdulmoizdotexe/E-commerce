const express = require('express');
const {viewOwner, registerOwner, loginOwner} = require('../controllers/owner.js') 
const router = express.Router();

router.get('/', viewOwner);
router.post('/', registerOwner);
router.post('/login', loginOwner);

module.exports = router;