use('movieData');

// Find the first document
db.movies.findOne()

// Find all documents
db.movies.find().pretty()

// Find document by filter
db.movies.findOne({ name: 'The Last Ship' })

// Find all documents by filter
db.movies.find({ runtime: 60 }).pretty()

// Find documents using comparison operators
// $eq -> equal
db.movies.find({ runtime: { $eq: 60 } }).pretty()
// $ne -> not equal
db.movies.find({ runtime: { $ne: 60 } }).pretty()
// $gt -> greater than
db.movies.find({ runtime: { $ne: 60 } }).pretty()
// ... more info -> // https://docs.mongodb.com/manual/reference/operator/query/#std-label-query-selectors

// Find nested (embedded) document using comparison operators
db.movies.find({ 'rating.average': { $gt: 7 } }).pretty()

// Find document by element of array -> it will show all documents that has the element in the list
db.movies.find({ genres: 'Drama' }).pretty()

// Find document by certian element of array -> it will show the documents that has only that element in the list
db.movies.find({ genres: ['Drama'] }).pretty()

// Find document by searching in array with $in
db.movies.find({ runtime: { $in: [30, 42] } }).pretty()

// Find document by searching NOT in array with $nin
db.movies.find({ runtime: { $nin: [30, 42] } }).pretty()