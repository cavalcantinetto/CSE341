//defines routes and creates a new router object
const routes = require('express').Router();


routes.get('/', (req, res) => {
    res.send('José Cavalcanti');
});


module.exports = routes;