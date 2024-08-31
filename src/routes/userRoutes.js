const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const validate = require('../middlewares/validate');
const { createUserSchema } = require('../validators/userValidator');

// Kullanıcıları listele
router.get('/', userController.getAllUsers);

// Belirli bir kullanıcıyı getir
router.get('/:id', userController.getUserById);

// Yeni kullanıcı oluştur (doğrulama eklenmiş)
router.post('/', validate(createUserSchema), userController.createUser);

module.exports = router;
