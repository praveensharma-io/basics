const express = require('express');
const fs = require('fs');
const path = require('path');

const router = express.Router();

const usersFilePath = path.join(__dirname, '../data/users.json');

router.get('/users', (req, res) => {
    const users = JSON.parse(fs.readFileSync(usersFilePath));
    res.json(users);
});

router.get('/users/:id', (req, res) => {
    const users = JSON.parse(fs.readFileSync(usersFilePath));
    const user = users.find(user => user.id === parseInt(req.params.id));
    if (!user) {
        return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);
});

router.post('/users', (req, res) => {
    const users = JSON.parse(fs.readFileSync(usersFilePath));
    users.push({...req.body});
    fs.writeFileSync(usersFilePath, JSON.stringify(users, null, 2));
    res.status(201).json(users);
});

module.exports = router;