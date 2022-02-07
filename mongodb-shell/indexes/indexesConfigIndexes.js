use('contactsData');

// Get indexes info
db.contacts.getIndexes();

// Create index and config it with the second argument
db.contacts.createIndex({ email: 1 }, { unique: true });
db.contacts.createIndex({ 'dob.age': 1 }, { partialFilterExpression: { gender: 'male' } });

// To search in Index List you need to specify and the gender
db.contacts.find({ 'dob.age': { $gt: 30 }, gender: 'male' });

// To create an index with unique value and not get exception for duplicate id (e.g email),
// need to specify that we want to look only if the field exist
db.contacts.createIndex({ email: 1 }, { unique: true, partialFilterExpression: { email: { $exists: true } } });

// TTL - Time To Live Index (it's works only on a single field)
db.sessions.insertOne({ data: 'some data', created: new Date() });
db.sessions.createIndex({ created: 1 }, { expireAfterSeconds: 10}); 