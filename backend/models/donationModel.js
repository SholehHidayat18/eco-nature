const { DataTypes } = require('sequelize');
const User = require('./userModel');
const sequelize = require('../config/db');



const Donation = sequelize.define('Donation', {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
    },
    title: {
        type: DataTypes.TEXT,
        allowNull: false,

    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false,

    },
    donation_count: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
        allowNull: false,
    },
    target: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
        allowNull: false,
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    message: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    image_path: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    avatar: {
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



module.exports = Donation;
