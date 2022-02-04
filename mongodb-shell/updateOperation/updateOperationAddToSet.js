use('users');

// Using $addToSet
db.users.updateOne({ name: 'Maria' }, { $addToSet: { hobbies: { title: 'Good Food', frequency: 2 } } });
// The difference between $addToSet and $push is that the first one add only unique value and the second one can dublicate the field