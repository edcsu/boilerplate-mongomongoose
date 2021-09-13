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
  Person.findOne( { food }, (error, data) => {
    if (error) return console.error(error);
    done(null, data);
  });
};

const personId = "";

const findPersonById = (personId, done) => {
  Person.findById( personId, (error, data) => {
    if (error) return console.error(error);
    done(null, data);
  });
};

const findEditThenSave = (personId, done) => {
  const foodToAdd = "hamburger";

  Person.findById( personId, (error, person) => {
    if (error) return console.error(error);

    // Array.push() method to add "hamburger" to the list of the person's favoriteFoods
    person.favoriteFoods.push(foodToAdd);

    // and inside the find callback - save() the updated Person.
    person.save((err, updatedPerson) => {
      if(err) return console.log(err);
      done(null, updatedPerson)
    })
  });
};

const findAndUpdate = (personName, done) => {
  const ageToSet = 20;
  const query = { name: personName };

  Person.findOneAndUpdate( query, { age: ageToSet}, { new: true }, (error, data) => {
    if (error) return console.error(error);
    done(null, data);
  });
};

const removeById = (personId, done) => {
  Person.findByIdAndRemove( personId, (error, data) => {
    if (error) return console.error(error);
    done(null, data);
  });
};

const removeManyPeople = (done) => {
  const nameToRemove = "Mary";
  const query = { name: nameToRemove };

  Person.deleteMany(query, (error, data) => {
    if(error) return console.log(error);
    done(null, data);
  })

  //  if (error) return done(error);
  // done(null /*, data*/);
};

const queryChain = (done) => {
  const foodToSearch = "burrito";

  Person.find({ favoriteFoods: foodToSearch })
  .sort({ name: 1 })
  .limit(2)
  .select({ age: 0 })
  .exec((error, data) => {
    if(error) console.log(error);
    done(null, data);
  })
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
