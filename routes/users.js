const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('User List');
});

router.get('/new', (req, res) => {
  res.send('New User Form');
});

router.post('/', (req, res) => {
  res.send('Create User');
});

router.get('/:id', (req, res) => {
  res.send(`Get user with id ${req.params.id}`);
});

module.exports = router;
