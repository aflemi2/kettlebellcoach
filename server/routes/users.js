const router = require('express').Router();
const db = require('../db');
const { User, Workout, ExerciseItem, Exercise } = db.models;
const { authorized, isCorrectUser, isAdmin } = require('./authFunc');

//USER ROUTES
router.get('/', authorized, isAdmin, (req, res, next)=> {
  User.findAll({
    include: [{
      model: Workout,
      include: [{
        model: ExerciseItem,
        include: [ Exercise ]
      }]
    }]
  })
    .then( users => res.send(users))
    .catch(next);
});

router.delete('/:id', authorized, isCorrectUser('params', 'id'), (req, res, next) => {
  User.findById(req.params.id)
    .then( user => {
      user.destroy();
    })
    .then( ()=> res.sendStatus(204))
    .catch(next);
});

router.put('/:id', authorized, isCorrectUser('params', 'id'), (req, res, next) => {
  User.findById(req.params.id)
    .then( user => {
      return user.update(req.body);
    })
    .then( user => res.send(user))
    .catch(next);
});

module.exports = router;
