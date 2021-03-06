// TASK:
// Create a database with name 'blog' and a collection with name 'users'.
// Add 3 users with 'name', 'age', and 'email' fields. 

// Use 'blog' name for database
use('blog');

// Create 'users' collection
db.users.insertMany([
  { 'name': 'Momchil Antonov', 'age': 37, 'email': 'ma@gmail.com' },
  { 'name': 'Angelina Gyosheva', 'age': 30, 'email': 'ag@gmail.com' },
  { 'name': 'Karina Antonova', 'age': 1, 'email': 'ka@gmail.com' },
]);

// Check what is inserted in database
db.users.find().pretty();
