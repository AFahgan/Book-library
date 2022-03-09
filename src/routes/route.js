const router = require('express').Router();
const {
  addBook, getbook, deleteBook, getmyBook,
} = require('../controllers');

router.post('/addbook', addBook);
router.get('/getbook', getbook);
router.get('/mybooks', getmyBook);
router.post('/deletebook', deleteBook);
module.exports = router;
