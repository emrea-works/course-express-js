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

/** 
 * Routers below are same, in order to write compact code, 
 * we are going to user router's function piplining feature
 */
/*
router.get('/:id', (req, res) => {
  res.send(`Get user with id ${req.params.id}`);
});

router.put('/:id', (req, res) => {
  res.send(`Update user with id ${req.params.id}`);
});

router.delete('/:id', (req, res) => {
  res.send(`Delete user with id ${req.params.id}`);
});
*/

router
  .route("/:id")
  .get((req, res) => {
    res.send(`Get user with id ${req.params.id}`);
  })
  .put((req, res) => {
    res.send(`Update user with id ${req.params.id}`);
  })
  .delete((req, res) => {
    res.send(`Delete user with id ${req.params.id}`);
  });

module.exports = router;
