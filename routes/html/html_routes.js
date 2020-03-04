// import express.Router()
const router = require('express').Router();

// import functionality to get all cats
const { getCats } = require('../../controllers/burgers_controller');

// set up root '/' GET route to serve home page with cat data
router.get('/', (req, res) => {
  // get all cat data
  getCats()
    .then(catdata => {
      res.render('home', { cats: catdata });
    })
    .catch(err => {
      res.status(500).end();
    });
});

module.exports = router;