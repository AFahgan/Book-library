const router = require('express').Router();
const {
   
    addBook,
   
  } = require('../controllers');
  
  
  router.post('/addbook', addBook);
 

module.exports = router;




