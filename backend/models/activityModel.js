const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const User = require('./userModel');
const Relawan = require('./relawanModel');
const Pengaduan = require('./pengaduanModel');

const Activity = sequelize.define('Activity', {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
    },
    pengaduan_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Pengaduan,
            key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
    },
    relawan_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Relawan,
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

module.exports = Activity;
