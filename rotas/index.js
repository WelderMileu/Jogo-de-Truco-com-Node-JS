'use strict';

const express = require('express')
const app = express.Router()

app.get("/",(req, res, next) => {
	res.render("index",{ texto:"Placar Truco" })
})

module.exports = app;