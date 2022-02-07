use('contactsData');

// Create a single index for a text field
db.contacts.createIndex({ gender: 1 });

// Drop Indexes
db.contacts.dropIndex({ 'dob.age': 1 });
db.contacts.dropIndex({ gender: 1 });

// Create a compaund index
db.contacts.createIndex({ 'dob.age': 1, gender: 1 });