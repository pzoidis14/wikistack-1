const express = require('express');
const router = express.Router();
// could use one line instead: const router = require('express').Router();
const client = require("./models");

router.get('/wiki', (req, res) => {
    res.send('get wiki')
})

router.get('/wiki', (req, res) => {
    res.send('get wiki')
})

router.get('/wiki/add', (req, res) => {
    res.send('get wiki/add')
})