const router = require('express').Router();
const database = require('../database/database');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
router.post('/register', (req, res) => {
    if (!req.body.email || !req.body.password || !req.body.name) {
        res.status(400).json({message: "Bad request"});
    }
    database.query("SELECT * FROM users WHERE email = ?", req.body.email, (err, result) => {
        if (result.length > 0) {
            res.status(409).json({message: "User already exists"});
        } else {
            const hash = bcrypt.hashSync(req.body.password, 10);
            database.query("INSERT INTO users (name, email, password) VALUES (?, ?, ?)", [req.body.name, req.body.email, hash], (err, result) => {
                if (err) {
                    console.log("Error", err);
                    res.status(500).json({message: "Internal server error"});
                } else {
                    res.status(201).json({message: "User created"});
                }
            });
        }
    });
})

router.post('/login', (req, res) => {
    if (!req.body.email || !req.body.password) {
        res.status(400).json({message: "Please enter email and password"});
        return;
    }
    database.query("SELECT * FROM users WHERE email = ?", req.body.email, (err, result) => {
        if (result.length === 0) {
            res.status(404).json({message: "Incorrect email or password"});
        } else {
            if (!bcrypt.compareSync(req.body.password, result[0].password)) {
                res.status(401).json({message: "Incorrect email or password"});
            } else {
                const payload = {
                    Name: result[0].name,
                    Email: result[0].email,
                };
                const token = jwt.sign(payload, process.env.ACCESSTOKEN_SECRET, {expiresIn: process.env.ACCESSTOKEN_LIFE});
                res.status(200).json({token: token, expirationDate: process.env.ACCESSTOKEN_LIFE});
            }
        }
    });
});

module.exports = router;
