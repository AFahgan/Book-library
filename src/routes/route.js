const router = require('express').Router();
const { addBook, getbook } = require('../controllers');

router.post('/addbook', addBook);
router.get('/getbook', getbook);

module.exports = router;
