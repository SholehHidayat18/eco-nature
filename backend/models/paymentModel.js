const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const User = require('./userModel');
const Donation = require('./donationModel');
const Bank = require('./bankModel');

const Payment = sequelize.define('Payment', {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
    },
    total: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    metode: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'transfer'
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'transfer'
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    no_handphone: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'Diproses'
    },
    image_path: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    message: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    bank_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Bank,
            key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
    },
    donation_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Donation,
            key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
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
    timestamps: true, // Automatically adds createdAt and updatedAt fields
    paranoid: true, // Enables soft deletes
    deletedAt: 'deletedAt',
});

module.exports = Payment;
