use('movieData');

// Find a document using $or -> one of the all conditions
db.movies.find({ $or: [{ 'rating.average': { $lt: 5 } }, { 'rating.average': { $gt: 9.3 } }] }).pretty();

// Find a document using $nor -> oposite of $or
db.movies.find({ $nor: [{ 'rating.average': { $lt: 5 } }, { 'rating.average': { $gt: 9.3 } }] }).pretty();

// Find a document using $and -> old version. it's better to use it when you mut to filter a field with same name (e.g. nested fields)
db.movies.find({ $and: [{ 'rating.average': { $gt: 9 } }, { genres: 'Drama' }] }).pretty();

// Find a document using $and -> new version
db.movies.find({ 'rating.average': { $gt: 9 }, genres: 'Drama' }).pretty();

// Find a document using $not
db.movies.find({ runtime: { $not: { $eq: 60 } } }).pretty();