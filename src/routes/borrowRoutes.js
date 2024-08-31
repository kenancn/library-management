const express = require('express');
const router = express.Router();
const borrowController = require('../controllers/borrowController');
const validate = require('../middlewares/validate');
const validateParams = require('../middlewares/validateParams');
const { borrowBookParamsSchema, returnBookParamsSchema, returnBookBodySchema } = require('../validators/borrowValidator');

// Kitap ödünç alma (path parametreleri doğrulama)
router.post('/:userId/borrow/:bookId', validateParams(borrowBookParamsSchema), borrowController.borrowBook);

// Kitap iade etme (path parametreleri ve body doğrulama)
router.post('/:userId/return/:bookId',
    validateParams(returnBookParamsSchema),
    validate(returnBookBodySchema),
    borrowController.returnBook
);

module.exports = router;
