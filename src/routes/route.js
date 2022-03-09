const router = require('express').Router();
const {
  addBook, getbook, deleteBook, getmyBook,
} = require('../controllers');
const {
  clientError,
  serverError,
} = require('../controllers/error');

router.post('/addbook', addBook);
router.get('/getbook', getbook);
router.get('/mybooks', getmyBook);
router.delete('/deletebook/:id', deleteBook);
router.use(clientError);
router.use(serverError);

module.exports = router;
