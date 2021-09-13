require('dotenv').config();
const mongoose = require('mongoose');
const mongoURI = process.env['MONGO_URI']
const { Schema } = mongoose;

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

const personSchema = new Schema({
    name : { type: String, required: true },
    location :  String, // String is shorthand for {type: String}
    age : Number,
    favoriteFoods: [String],
  });

const Person = mongoose.model('Person', personSchema);

const createAndSavePerson = (done) => {
  const person = new Person({ name: 'Keith', location: 'Lira', age: 75, favoriteFoods: ['Kalo', 'Posho', 'rice'] });
  person.save((error, data) => {
    if (error) return console.error(error);
    done(null, data);
  });
};

let arrayOfPeople = [
  { name: 'Messi', location: 'Lira', age: 34, favoriteFoods: ['Kalo', 'Potatoes', 'rice']},
  { name: 'Ronaldo', location: 'Lira', age: 36, favoriteFoods: ['Kalo', 'Beans', 'rice'] },
  { name: 'Fred', location: 'Lira', age: 27, favoriteFoods: ['Kalo', 'Fish', 'rice']}
];
const createManyPeople = (arrayOfPeople, done) => {
  Person.create(arrayOfPeople, (error, data) => {
    if (error) return console.error(error);
    done(null, data);
  });
};

const personName = 'Messi';

const findPeopleByName = (personName, done) => {
  Person.find( { name: personName }, (error, data) => {
    if (error) return console.error(error);
    done(null, data);
  });
};

const food = 'Fish';

const findOneByFood = (food, done) => {
  Person.findOne( { food: personName }, (error, data) => {
    if (error) return console.error(error);
    done(null, data);
  });
};

const findPersonById = (personId, done) => {
  if (error) return done(error);
  done(null /*, data*/);
};

const findEditThenSave = (personId, done) => {
  const foodToAdd = "hamburger";

  if (error) return done(error);
  done(null /*, data*/);
};

const findAndUpdate = (personName, done) => {
  const ageToSet = 20;

  if (error) return done(error);
  done(null /*, data*/);
};

const removeById = (personId, done) => {
  if (error) return done(error);
  done(null /*, data*/);
};

const removeManyPeople = (done) => {
  const nameToRemove = "Mary";

  if (error) return done(error);
  done(null /*, data*/);
};

const queryChain = (done) => {
  const foodToSearch = "burrito";

  if (error) return done(error);
  done(null /*, data*/);
};

/** **Well Done !!**
/* You completed these challenges, let's go celebrate !
 */

//----- **DO NOT EDIT BELOW THIS LINE** ----------------------------------

exports.PersonModel = Person;
exports.createAndSavePerson = createAndSavePerson;
exports.findPeopleByName = findPeopleByName;
exports.findOneByFood = findOneByFood;
exports.findPersonById = findPersonById;
exports.findEditThenSave = findEditThenSave;
exports.findAndUpdate = findAndUpdate;
exports.createManyPeople = createManyPeople;
exports.removeById = removeById;
exports.removeManyPeople = removeManyPeople;
exports.queryChain = queryChain;
