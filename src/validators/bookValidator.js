const Joi = require('joi');

const createBookSchema = Joi.object({
    name: Joi.string().min(2).max(100).required().messages({
        'string.base': 'Kitap ismi metin olmalı.',
        'string.empty': 'Kitap ismi boş olamaz.',
        'string.min': 'Kitap ismi en az 2 karakter olmalı.',
        'string.max': 'Kitap ismi en fazla 100 karakter olabilir.',
        'any.required': 'Kitap ismi zorunludur.'
    }),
    score: Joi.number().min(0).max(10).optional().messages({
        'number.base': 'Puan bir sayı olmalı.',
        'number.min': 'Puan en az 0 olabilir.',
        'number.max': 'Puan en fazla 10 olabilir.'
    })
});

module.exports = {
    createBookSchema,
};
