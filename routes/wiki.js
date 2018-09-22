const express = require('express');
const router = express.Router();
// could use one line instead: const router = require('express').Router();
const client = require("../models");
const {addPage} = require('../views')

router.get('/', (req, res) => {
    res.send('get wiki')
})

router.post('/', (req, res) => {
    res.send('post wiki')
})

router.get('/add', (req, res) => {
    res.send(addPage())
})

module.exports = router;
