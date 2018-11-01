const conn = require('./connection');
const seed = require('./seed');
const Workout = require('./Workout');
const ExerciseItem = require('./ExerciseItem');
const Exercise = require('./Exercise');
const Category = require('./Category');
const User = require('./User');

Exercise.belongsTo(Category);
Exercise.hasMany(ExerciseItem);
Category.hasMany(Exercise);
ExerciseItem.belongsTo(Workout);
ExerciseItem.belongsTo(Exercise);
Workout.hasMany(ExerciseItem);
Workout.belongsTo(User);
User.hasMany(Workout);

const syncAndSeed = () => {
  return conn.sync({ force: true })
    .then(() => seed())
    .catch(err => {
      throw err;
    });
};

module.exports = {
  syncAndSeed,
  models: {
    Workout,
    ExerciseItem,
    Exercise,
    Category,
    User
   }
};
