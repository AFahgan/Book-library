const router = require('express').Router();
const {
  addBook, getbook, deleteBook, getmyBook, addMyBook, deletemyBook,
} = require('../controllers');
const {
  clientError,
  serverError,
} = require('../controllers/error');

router.post('/addbook', addBook);
router.post('/addMyBook', addMyBook);
router.get('/getbook', getbook);
router.get('/mybooks', getmyBook);
router.delete('/deletebook/:id', deleteBook);
router.delete('/deletemybook/:id', deletemyBook);
router.use(clientError);
router.use(serverError);

module.exports = router;
