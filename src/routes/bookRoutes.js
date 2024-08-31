const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');
const validate = require('../middlewares/validate');
const { createBookSchema } = require('../validators/bookValidator');

router.get('/', bookController.getAllBooks);


router.get('/:id', bookController.getBookById);


router.post('/', validate(createBookSchema), bookController.createBook);

router.put('/:id', bookController.updateBook); 
router.delete('/:id', bookController.deleteBook); 

module.exports = router;
