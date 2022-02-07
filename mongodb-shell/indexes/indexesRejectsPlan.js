use('contactData');

// Create an index
db.customers.createIndex({ age: 1, name: 1 });

// Check all Plans
db.customers.explain('allPlansExecution').find({ name: 'Angelina', age: 29 });