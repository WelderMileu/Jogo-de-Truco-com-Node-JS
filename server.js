'use strict';

const express = require('express')
const path = require('path')
const bodyParse = require('body-parser')
const app = express()

const index = require("./rotas/index")
const port = process.env.PORT || 3000

app.set("view engine","ejs")
app.use(express.static(path.join(__dirname + "/public")))
app.use(bodyParse.json())
app.use(bodyParse.urlencoded({ extended: false }))

app.use("/", index)

app.listen(port,(error) => {
	const open = error?`Erro ao connectar ao servidor`
	:`Servidor rodando em http://localhost:${port}`

	console.log(open)
})