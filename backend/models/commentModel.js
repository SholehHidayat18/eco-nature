const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const User = require('./userModel');
const News = require('./newsModel');
const Education = require('./edukasiModel');
const Donation = require('./donationModel');
const Pengaduan = require('./pengaduanModel');

const Comment = sequelize.define('Comment', {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
    },
    message: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    donation_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: Donation, // Pastikan tabel Users sudah ada
            key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
    },
    news_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: News, // Pastikan tabel Users sudah ada
            key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
    },
    education_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: Education,
            key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
    },
    pengaduan_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: Pengaduan,
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

module.exports = Comment;
