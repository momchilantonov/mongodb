use('users');

// Delete entire collection
db.users.deleteMany({});

// Other way to do it
db.users.drop();

// Delete entire database
db.users.dropDatabase();