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

router.get('/types', function(req, res, next) {
    queries.getTypes()
    .then(function(shows) {
      res.status(200).json(shows);
    })
    .catch(function(error) {
      next(error);
    });
  });

// GET a single activity by id
router.get('/:id', (req, res, next) => {
    queries.getSingle(req.params.id)
    .then(function(show) {
      res.status(200).json(show);
    })
    .catch(function(error) {
      next(error);
    });
  });

// GET aactivities by price
router.get('/order/:column', (req, res, next) => {
    queries.orderByAsc(req.params.column)
    .then(function(show) {
      res.status(200).json(show);
    })
    .catch(function(error) {
      next(error);
    });
  });



  router.get('/all', function(req, res, next) {
    queries.getAll()
    .then(function(shows) {
      res.status(200).json(shows);
    })
    .catch(function(error) {
      next(error);
    });
  });

  // GET all types
//   router.get('/types', (req, res, next) => {
//     queries.getAllTypes()
//     .then(function(show) {
//       res.status(200).json(show);
//     })
//     .catch(function(error) {
//       next(error);
//     });
//   });

  // GET aactivities by type
router.get('/type/:type', (req, res, next) => {
    queries.getByType(req.params.type)
    .then(function(show) {
      res.status(200).json(show);
    })
    .catch(function(error) {
      next(error);
    });
  });

// add activity
router.post('/add', (req, res, next) => { 
    queries.add(req.body)
    .then(function(activityID) {
      return queries.getSingle(activityID);
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
  queries.update(req.params.id, req.body)
  .then(function() {
    return queries.getSingle(req.params.id);
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
    queries.getSingle(req.params.id)
    .then(function(show) {
    queries.deleteItem(req.params.id)
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