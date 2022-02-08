// TASKS
// 1. Find only persons older than 50 and group them by gender
// 2. Find out how many persons are by gender
// 3. Find out what is the average age
// 4. Sort by persons count in descending order

// SOLUTION
use('usersData');

db.persons.aggregate([
    { $match: { 'dob.age': { $gt: 50 } } },
    { $group: { _id: { gender: '$gender' }, totalPersons: { $sum: 1 }, avgAge: { $avg: '$dob.age' } } },
    { $sort: { totalPersons: -1 } }
]);