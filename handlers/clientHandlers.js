const { v4: uuidv4 } = require('uuid');
const { clients } = require('../data/clients');

// write your handlers here...
const getClientById = (arr, id) => {
    return arr.find( client => client.id === id);
}

const addNewClient = (arr, req, res) => {
    if (arr.some( client => client.email === req.body.email)) {
        res.status(400).send('Client already exists!')
    } else {
        req.body.id = uuidv4();
        clients.push(req.body);
        res.status(201).send(`${req.body.name} added to our databaes!`)
    }
}

const delClientById = (arr, id, res) => {
    const exClient = getClientById(arr, id);
    const index = arr.indexOf(exClient);
    if (index > -1) {
        arr.splice(index, 1);
        res.status(200).send(`${exClient.name} removed from the database.`);
    } else {
        res.status(404).send('Who are you exactly looking for?');
    }
}

module.exports = { getClientById, addNewClient, delClientById };