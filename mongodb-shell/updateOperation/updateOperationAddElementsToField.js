use('users');

// Add an element to a field using $push
db.users.updateOne({ name: 'Maria' }, { $push: { hobbies: { title: 'Sports', frequency: 2 } } });

// Using $push and $each to add more than one document
db.users.updateOne({ name: 'Maria' }, { $push: { hobbies: { $each: [{ title: 'Good Wine', frequency: 1 }, { title: 'Good Food', frequency: 2 }] } } });

// Using $push, $each and $sort to add more than one document and sort it befor push it
db.users.updateOne({ name: 'Maria' }, { $push: { hobbies: { $each: [{ title: 'Good Wine', frequency: 1 }, { title: 'Good Food', frequency: 2 }], $sort: { frequency: -1 } } } });