const sequelize = require('../config/database');
const User = require('./User');
const Book = require('./Book');
const Borrowing = require('./Borrowing');

// İlişkileri tanımla
User.hasMany(Borrowing);
Borrowing.belongsTo(User);

Book.hasMany(Borrowing);
Borrowing.belongsTo(Book);

// Modelleri ve Sequelize bağlantısını dışa aktar
module.exports = {
    sequelize,
    User,
    Book,
    Borrowing,
};
