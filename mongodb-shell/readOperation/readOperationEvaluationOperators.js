use('movieData');

// Find with regular expression
db.movies.find({ summary: { $regex: /music/ } }).pretty();

// Compare documents with $expr
use('financialData');

db.sales.insertMany([
    { volume: 100, target: 125 },
    { volume: 90, target: 80 },
    { volume: 200, target: 175 }
]);

db.sales.find({ $expr: { $gt: ['$volume', '$target'] } }).pretty();

db.sales.find({ $expr: { $gt: [{ $cond: { if: { $gte: ['$volume', 190] }, then: { $subtract: ['$volume', 10] }, else: '$volume' } }, '$target'] } }).pretty();