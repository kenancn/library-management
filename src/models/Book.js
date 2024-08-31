const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Book = sequelize.define('Book', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    score: {
        type: DataTypes.FLOAT,
        defaultValue: -1,
    }
}, {
    timestamps: true
});

module.exports = Book;
