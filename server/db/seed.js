const Workout = require('./Workout');
const Exercise = require('./Exercise');
const Category = require('./Category');
const User = require('./User');
const users = require('./users');

const seed = () => {
  return Promise.all(categories.map( category => Category.create(category)))
    .then(() => {
      return exercises.map( exercise => Exercise.create(exercise));
    })
    .then(() => {
      return Promise.all(users.map( user => User.create(user)));
    })
    .then(() => User.find({
      where: { firstName: 'Arnold' }
    }))
    .then( user => Promise.all([
      Workout.findOrCreateCart(user.id),
      Exercise.findById(1),
      Exercise.findById(2),
      Exercise.findById(3),
    ]))
    .then(([workout, exercise1, exercise2, exercise3]) =>{
      workout.addToWorkout(2, 10, exercise1);
      workout.addToWorkout(2, 10, exercise2);
      workout.addToWorkout(3, 8, exercise3);
    })
    .catch( err => { throw err; } );
};

module.exports = seed;
