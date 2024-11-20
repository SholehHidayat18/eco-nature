const express = require('express');
const bcrypt = require('bcrypt'); // Pastikan bcrypt sudah diinstal
const jwt = require('jsonwebtoken'); // Pastikan jsonwebtoken sudah diinstal
const db = require('../config/db'); // Pastikan path ke file database Anda benar

const router = express.Router();

// Endpoint untuk registrasi
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
            const query = 'INSERT INTO users (name, email, password_hash) VALUES (?, ?, ?)';
            db.query(query, [name, email, hashedPassword], (err, result) => {
                if (err) {
                    console.error('Database error:', err.message);
                    return res.status(500).json({ error: 'Database error' });
                }
                res.status(201).json({ message: 'User registered successfully' });
            });
        });
    } catch (error) {
        console.error('Server error:', error.message);
        res.status(500).json({ error: 'Server error' });
    }
});

// Endpoint untuk login
router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    // Validasi input
    if (!email || !password) {
        return res.status(400).json({ error: 'Email dan password wajib diisi' });
    }

    try {
        // Cek apakah email terdaftar
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
            const token = jwt.sign({ userId: user.id, email: user.email }, 'your_secret_key', { expiresIn: '1h' });

            // Mengirimkan token sebagai respons
            res.json({ message: 'Login berhasil', token });
        });
    } catch (error) {
        console.error('Server error:', error.message);
        res.status(500).json({ error: 'Server error' });
    }
});

// Export router
module.exports = router;
