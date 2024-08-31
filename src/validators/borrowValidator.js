const Joi = require('joi');

const borrowBookParamsSchema = Joi.object({
    userId: Joi.number().integer().positive().required().messages({
        'number.base': 'Kullanıcı ID bir sayı olmalı.',
        'number.integer': 'Kullanıcı ID tam sayı olmalı.',
        'number.positive': 'Kullanıcı ID pozitif bir sayı olmalı.',
        'any.required': 'Kullanıcı ID zorunludur.'
    }),
    bookId: Joi.number().integer().positive().required().messages({
        'number.base': 'Kitap ID bir sayı olmalı.',
        'number.integer': 'Kitap ID tam sayı olmalı.',
        'number.positive': 'Kitap ID pozitif bir sayı olmalı.',
        'any.required': 'Kitap ID zorunludur.'
    }),
});

const returnBookParamsSchema = borrowBookParamsSchema;

const returnBookBodySchema = Joi.object({
    score: Joi.number().min(0).max(10).optional().messages({
        'number.base': 'Puan bir sayı olmalı.',
        'number.min': 'Puan en az 0 olabilir.',
        'number.max': 'Puan en fazla 10 olabilir.'
    })
});

module.exports = {
    borrowBookParamsSchema,
    returnBookParamsSchema,
    returnBookBodySchema,
};
