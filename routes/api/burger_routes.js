const router = require('express').Router();

const { getBurgers, createBurger, updateBurger } = require('../../controllers/burgers_controller');

// create full CRUD routes at `/cats` (it will eventually become '/api/cats')
router.get('/burgers', (req, res) => {
  getBurgers()
    .then(burgerdata => {
      res.status(200).json(burgerdata);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

router.post('/burgers', (req, res) => {
  // req.body => { cat_name: 'Derek'}
  createBurger(req.body)
    .then(burgerdata => {
      res.status(200).json(burgerdata);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

router.put('/burgers/:id', (req, res) => {
  updateBurger(req.body, req.params.id)
    .then(burgerdata => {
      if (burgerdata.code === 404) {
        return res.status(404).json(burgerdata);
      }
      res.status(200).json(burgerdata);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

// router.delete('/cats/:id', (req, res) => {
//   deleteCat(req.params.id)
//     .then(catdata => {
//       if (catdata.code === 404) {
//         return res.status(404).json(catdata);
//       }

//       res.status(200).json(catdata);
//     })
//     .catch(err => {
//       res.status(500).json(err);
//     });
// });

module.exports = router;