const router = require('express').Router();

router.get('/', (req, res) => {
  res.send('Get all');
});

router
  .route('/:id')
  .get((req, res) => res.send('Find by id'))
  .patch((req, res) => res.send('Update client info'))
  .delete((req, res) => res.send('Delete'));

router
  .route('/:id/cases')
  .get((req, res) => res.send('Get cases'))
  .post((req, res) => res.send('Add case'))
  .patch((req, res) => res.send('Update case'))
  .delete((req, res) => res.send('Delete case'));

module.exports = router;
