# course-express-js
Express JS Crash Course, Study History

---

### nodemon
The package to make development easier. 

### router
Everything goes top to bottom in a script with router commands. So dynamic router endpoints must be at the bottom if there will be a specific endpoint

```js
// let's assume router is defined 

router.get('/:id', (req, res) => {
  res.send(`Get user with id ${req.params.id}`);
});

router.get('/new', (req, res) => {
  res.send(`New User Form`);
});
```

In that example if we use .../new as URL router will treat it as and unique id, cos the latest endpoint listens any value as id. To be able to define /new specific routing address dynamic definition must be below of it. 

## middlewares
`next` only used in middlewares. 