const router = require('express').Router();

router.get('/', (req, res) => {
  res.send('Cases works');
});

router
  .route('/:id')
  .patch((req, res) => {
    res.send('Update case type');
  })
  .delete((req, res) => {
    res.send('Delete case type');
  });

export default router;
