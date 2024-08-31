const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Borrowing = sequelize.define('Borrowing', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    returnDate: {
        type: DataTypes.DATE,
        allowNull: true,
    },
    userScore: {
        type: DataTypes.FLOAT,
        allowNull: true,
    }
}, {
    timestamps: true
});

module.exports = Borrowing;
