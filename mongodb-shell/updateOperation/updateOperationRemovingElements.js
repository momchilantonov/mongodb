use('users');

// Remove a field form a documet using $pull
db.users.updateOne({ name: 'Maria' }, { $pull: { hobbies: { title: 'Good Wine' } } });

// Remove a field form a documet using $pop
// First element
db.users.updateOne({ name: 'Maria' }, { $pop: { hobbies: 1 } });
// Last element
db.users.updateOne({ name: 'Maria' }, { $pop: { hobbies: -1 } });