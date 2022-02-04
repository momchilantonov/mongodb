use('users');

// Delete with deleteOne() with specified file
db.users.deleteOne({ name: 'Chris' });

// Delete with deleteMany() with specified file
db.users.deleteMany({ age: { $exists: false }, isSporty: true });
