var express = require('express');
var router = express.Router();
var queries = require('../db/queries');


// *** GET all activites *** //
router.get('/all', function(req, res, next) {
  queries.getAll()
  .then(function(shows) {
    res.status(200).json(shows);
  })
  .catch(function(error) {
    next(error);
  });
});

// GET a single activity by id
router.get('/:id', (req, res, next) => {
    db.getSingle(req.params.id)
    .then(function(show) {
      res.status(200).json(show);
    })
    .catch(function(error) {
      next(error);
    });
  });

// add activity
router.post('/add', (req, res, next) => { 
  db.add(req.body)
    .then(function(activityID) {
      return db.getSingle(activityID);
    })
    .then(function(show) {
      res.json(show);
    })
    .catch(function(error) {
      next(error);
    });
  });
  
//   update activity 
  router.put('/:id', (req, res, next) => {
    if(req.body.hasOwnProperty('id')) {
      return res.status(422).json({
        error: 'You cannot update the id field'
      });
    }
    db.update(req.params.id, req.body)
    .then(function() {
      return db.getSingle(req.params.id);
    })
    .then(function(show) {
      res.status(200).json(show);
    })
    .catch(function(error) {
      next(error);
    });
  });
  
// delete activity
  router.delete('/:id', function(req, res, next) {
    db.getSingle(req.params.id)
    .then(function(show) {
      db.deleteItem(req.params.id)
      .then(function() {
        res.status(200).json(show);
      })
      .catch(function(error) {
        next(error);
      });
    }).catch(function(error) {
      next(error);
    });
  });

module.exports = router;