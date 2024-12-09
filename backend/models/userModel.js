const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const User = sequelize.define('User', {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  jenis_kelamin: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  tanggal_lahir: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  pekerjaan: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  no_handphone: {
    type: DataTypes.STRING,
    allowNull: true,
    unique: true,
  },
  alamat: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  role: {
    type: DataTypes.ENUM('admin', 'user'),
    allowNull: false,
    defaultValue: 'user', // Menambahkan default value untuk kolom role
  },
  image_path: {
    type: DataTypes.STRING,
    allowNull: true,
  },

}, {
  timestamps: true, // Automatically adds createdAt and updatedAt fields
  paranoid: true, // Enables soft deletes
  deletedAt: 'deletedAt',
});

module.exports = User;
