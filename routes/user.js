const express = require('express');
const router = express.Router();
// could use one line instead: const router = require('express').Router();
const client = require("../models");

router.get('/', (req, res) => {
    res.send('get all users, do not change db')
})

router.get('/123', (req, res) => {
    res.send('get user123, do not change db')
})

router.post('/', (req, res) => {
    res.send('create a user in db')
})

router.put('/123', (req, res) => {
  res.send('update user123 in db')
})

router.delete('/123', (req, res) => {
  res.send('delete user123 from db')
})

module.exports = router;
