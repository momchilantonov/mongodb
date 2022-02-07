use('contactData');

// Insert two documents in 'customer' collection
db.customers.insertMany([{ name: 'Momchil', age: 37, salary: 3000 }, { name: 'Angelina', age: 29, salary: 3500 }]);

// Create an index
db.customers.createIndex({ name: 1 });

// Check the result
db.customers.explain('executionStats').find({ name: 'Momchil' });

// Return without id and only names
db.customers.explain('executionStats').find({ name: 'Momchil' }, { _id: 0, name: 1 });