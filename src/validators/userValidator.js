const Joi = require('joi');

const createUserSchema = Joi.object({
    name: Joi.string().min(3).max(30).required().messages({
        'string.base': 'İsim metin olmalı.',
        'string.empty': 'İsim boş olamaz.',
        'string.min': 'İsim en az 3 karakter olmalı.',
        'string.max': 'İsim en fazla 30 karakter olabilir.',
        'any.required': 'İsim zorunludur.'
    }),
});

module.exports = {
    createUserSchema,
};
