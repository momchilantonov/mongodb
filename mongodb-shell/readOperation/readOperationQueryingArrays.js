use('users');

// Search for nasted document in a collection
db.users.find({ 'hobbies.title': 'Sport' }).pretty();

// Use $size to search by count of elements in array
db.users.insertOne({ name: 'Ivan', hobbies: ['Sport', 'Cooking', 'Hiking'] });
db.users.find({ hobbies: { $size: 3 } }).pretty();

// Use $all if you don't care about the order
use('boxOffice');
db.movieStarts.find({ genre: { $all: ['action', 'thriller'] } }).pretty();

// Use $elemMatch
use('users');
db.users.find({ hobbies: { $elemMatch: { title: 'Sport', frequency: { $gt: 3 } } } }).pretty();