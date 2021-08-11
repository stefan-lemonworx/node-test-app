const express = require('express');
const users = require('../APIs/users');

// eslint-disable-next-line new-cap
const router = express.Router();

router.get('/', users.getAllUsers);
router.post('/', users.addUser);
router.get('/:id', users.getUserByID);
router.patch('/:id', users.editUserByID);
router.delete('/:id', users.deleteUserByID);

module.exports = router;
