const { DataTypes } = require('sequelize');
const User = require('./userModel');
const sequelize = require('../config/db');



const Bank = sequelize.define('Bank', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    image_path: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    an: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    no_rek: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    brand: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    createdBy: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: User,
            key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
    },
}, {
    timestamps: true,
    paranoid: true, // Enables soft deletes
    deletedAt: 'deletedAt', // Automatically adds createdAt and updatedAt fields
});



module.exports = Bank;
