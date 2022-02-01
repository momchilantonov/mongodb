use('movieData');

// Find next element in the collection
const dataCursor = db.movies.find();
dataCursor.next();

// Use forEach() method to fatch all documents in the collection
dataCursor.forEach(doc => { printjson(doc) });

// Check if there is a next document -> return bool
dataCursor.hasNext();

// Sorting the results (use 1 for ascending and -1 for descending)
db.movies.find().sort({ 'rating.average': 1, runtime: -1 }).pretty();

// Skip a certian documents form the collection
db.movies.find().sort({ 'rating.average': 1 }).skip(10).pretty();

// Limit a certian documents from the collection
db.movies.find().sort({ 'rating.average': 1 }).skip(10).limit(10).pretty();

// Use projection to shape the result. The first arg in find() method is empty curly brackets (don't want to add criteria)
// and the second one is to include all fields that we want in the result
db.movies.find({}, { name: 1, ganres: 1, runtime: 1, raiting: 1 }).pretty();

// Use projection in arrays
db.movies.find({ genres: 'Drama' }, { 'genres.$': 1 }).pretty();
db.movies.find({ genres: 'Drama' }, { ganres: { $elemMatch: { $eq: 'Horror' } } }).pretty();

// Use $slice -> dhow that number of documents that was spec
db.movies.find({ 'rating.average': { $gt: 9 } }, { generes: { $slice: [1, 2] } }).pretty();