'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const { clients } = require('./data/clients.js');
const { getClientById, addNewClient, delClientById } = require('./handlers/clientHandlers');
const { getWordById, returnIdCount, checkLetter } = require('./handlers/hangmanHandlers');

express()
  .use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept'
    );
    next();
  })
  .use(morgan('tiny'))
  .use(express.static('public'))
  .use(bodyParser.json())
  .use(express.urlencoded({ extended: false }))

  // endpoints
  .get('/clients', (req, res) => {
    res.status(200).json(clients);
  })
  .get('/clients/:id', (req, res) => {
    const {id} = req.params;
    res.status(200).json(getClientById(clients, id));
  })
  .post('/clients', (req, res) => {
    addNewClient(clients, req, res);
  })
  .delete('/clients/:id', (req, res) => {
    const {id} = req.params;
    delClientById(clients, id, res);    
  })

  //hangman
  .get('/hangman/word/:id', (req, res) => {
    const {id} = req.params;
    res.status(200).send(getWordById(id));
  })
  .get('/hangman/word', (req, res) => {
    res.status(200).send(returnIdCount());
  })
  .get('/hangman/guess/:id/:letter', (req, res) => {
    const {id, letter} = req.params;
    res.status(200).send(checkLetter(id, letter))
  })
  .listen(8000, () => console.log(`Listening on port 8000`));
