const router = require('express').Router();

router.post('/', (req, res) => {
  res.send('Register');
});

router
  .route('/:id')
  .patch((req, res) => res.send('Update account info works'))
  .delete((req, res) => res.send('Delete'));

router.patch('/:id/activate', (req, res) => {
  res.send('Activate');
});

router.patch('/:id/deactivate', (req, res) => {
  res.send('Deactivate');
});

export default router;
