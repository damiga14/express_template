var express = require('express')
var app = express()
var mongoose = require('mongoose')
var { config } = require('../config')

mongoose.connect(config.db.TEST, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(()=>{console.log('DB Connected')})
    .catch(()=>{console.log('I am Error, DB not connected')})


module.exports = { app }