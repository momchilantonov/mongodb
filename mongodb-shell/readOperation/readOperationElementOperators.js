use('users');

// Insert some data
db.users.insertMany([
    { name: 'Momchil', hobbies: [{ title: 'Sport', frequency: 3 }, { title: 'Cooking', frequency: 5 }], phone: '0888888888' },
    { name: 'Angelina', hobbies: [{ title: 'Sport', frequency: 2 }, { title: 'Cooking', frequency: 6 }], phone: '0877777777', age: 30 }
]);

// Find all users with age field and value for it > 30
db.users.find({ age: { $exist: true, $gt: 30 } }).pretty()

// Insert one more user
db.users.insertOne({ name: 'Karina', hobbies: [{ title: 'Sport', frequency: 4 }, { title: 'Cooking', frequency: 7 }], phone: 0866666666, age: null })

// Repeat the search and find users with age with value
db.users.find({ age: { $exist: true, $ne: null } }).pretty()

// Find with $type
db.users.find({ phone: { $type: 'double' } }).pretty()

// Or
db.users.find({ phone: { $type: 'string' } }).pretty()

// Or you can use it with many types
db.users.find({ phone: { $type: ['double', 'string'] } }).pretty()