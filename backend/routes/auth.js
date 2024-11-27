const express = require('express');
const bcrypt = require('bcrypt'); // Pastikan bcrypt sudah diinstal
const jwt = require('jsonwebtoken'); // Pastikan jsonwebtoken sudah diinstal
const crypto = require('crypto'); // Untuk generate token reset
const nodemailer = require('nodemailer'); // Untuk mengirim email
const db = require('../config/db'); // Pastikan path ke file database Anda benar
const authenticateJWT = require('../middlewares/authMiddleware')

const router = express.Router();

// Endpoint untuk registrasi (sudah ada)
router.post('/register', async (req, res) => {
    const { name, email, password } = req.body;

    // Validasi input
    if (!name || !email || !password) {
        return res.status(400).json({ error: 'Nama, email, dan password wajib diisi' });
    }

    try {
        // Cek apakah email sudah terdaftar
        const checkEmailQuery = 'SELECT * FROM users WHERE email = ?';
        db.query(checkEmailQuery, [email], async (err, results) => {
            if (err) {
                console.error('Database error:', err.message);
                return res.status(500).json({ error: 'Database error' });
            }

            if (results.length > 0) {
                return res.status(400).json({ error: 'Email sudah terdaftar' });
            }

            // Hashing password
            const hashedPassword = await bcrypt.hash(password, 10);

            // Query untuk menyimpan data ke database
            const query = 'INSERT INTO users (name, email, password_hash, role) VALUES (?, ?, ?, user)';
            db.query(query, [name, email, hashedPassword], (err, result) => {
                if (err) {
                    console.error('Database error:', err.message);
                    return res.status(500).json({ error: 'Database error' });
                }
                res.status(201).json({ message: 'User registered successfully', });
            });
        });
    } catch (error) {
        console.error('Server error:', error.message);
        res.status(500).json({ error: 'Server error' });
    }
});

// Endpoint untuk login (sudah ada)
router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    console.log(req.body)

    // Validasi input
    if (!email || !password) {
        return res.status(400).json({ error: 'Email dan password wajib diisi' });
    }

    try {
        // Cek email terdaftar
        const query = 'SELECT * FROM users WHERE email = ?';
        db.query(query, [email], async (err, results) => {
            if (err) {
                console.error('Database error:', err.message);
                return res.status(500).json({ error: 'Database error' });
            }

            if (results.length === 0) {
                return res.status(400).json({ error: 'Email tidak terdaftar' });
            }

            const user = results[0];

            // Verifikasi password
            const isPasswordValid = await bcrypt.compare(password, user.password_hash);
            if (!isPasswordValid) {
                return res.status(400).json({ error: 'Password salah' });
            }

            // Membuat JWT token
            const token = jwt.sign({ id: user.id, email: user.email }, 'process.env.JWT_SECRET', { expiresIn: '1h' });

            // Mengirimkan token sebagai respons
            res.json({ message: 'Login berhasil', token, role:user.role, name:user.name});
        });
    } catch (error) {
        console.error('Server error:', error.message);
        res.status(500).json({ error: 'Server error' });
    }
});

// Endpoint untuk mengganti password
router.post('/reset-password', async (req, res) => {
    const { email, newPassword } = req.body;

    // Validasi input
    if (!email || !newPassword) {
        return res.status(400).json({ error: 'Email dan password baru wajib diisi' });
    }

    try {
        // Cek email terdaftar
        const query = 'SELECT * FROM users WHERE email = ?';
        db.query(query, [email], async (err, results) => {
            if (err) {
                console.error('Database error:', err.message);
                return res.status(500).json({ error: 'Database error' });
            }

            if (results.length === 0) {
                return res.status(400).json({ error: 'Email tidak terdaftar' });
            }

            const user = results[0];

            // Hashing password baru
            const hashedPassword = await bcrypt.hash(newPassword, 10);

            // Query untuk memperbarui password
            const updateQuery = 'UPDATE users SET password_hash = ? WHERE email = ?';
            db.query(updateQuery, [hashedPassword, email], (err, result) => {
                if (err) {
                    console.error('Database error:', err.message);
                    return res.status(500).json({ error: 'Database error' });
                }

                res.json({ message: 'Password berhasil diperbarui' });
            });
        });
    } catch (error) {
        console.error('Server error:', error.message);
        res.status(500).json({ error: 'Server error' });
    }
});

// Endpoint untuk mendapatkan informasi pengguna yang sedang login
const verifyToken = (req, res, next) => {
    const token = req.headers['authorization'];
  
    if (!token) {
      return res.status(401).json({ message: 'Access denied' });
    }
  
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = decoded;
      next();
    } catch (err) {
      res.status(400).json({ message: 'Invalid token' });
    }
  };
router.get('/me', (req, res, next) => {
   
    try {
        // Cek email terdaftar
        const query = 'SELECT * FROM users WHERE id = ?';
        db.query(query, [7], async (err, results) => {
            if (err) {
                console.error('Database error:', err.message);
                return res.status(500).json({ error: 'Database error' });
            }

            if (results.length === 0) {
                return res.status(400).json({ error: 'Email tidak terdaftar' });
            }

            const user = results[0];

           res.json(user);
        });
    } catch (error) {
        console.error('Server error:', error.message);
        res.status(500).json({ error: 'Server error' });
    }
    
  });



// Export router
module.exports = router;
