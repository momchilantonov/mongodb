// TASKS
// 1. Import the atached data file into a new collectionexMovieStarts in the boxOffice database
// 2. Find all movies with exactly 2 genres
// 3. FInd all movies with aired 2018
// 4. Find all movies which have ratings greater than 8 but lower than 10

// Task 1

// Import the data with read-operation-exercise-import-data02.sh. The shell file is created separately.

/*
#!/bin/bash

FILENAME="boxoffice-extended.json"
DATABASE="boxOffice"
COLLECTION="exMovieStarts"

if [[ ! -e "${FILENAME}" ]]
then
  echo "Cannot open ${FILENAME}"
  exit 1
fi

echo "Importing ${FILENAME}"
mongoimport ${FILENAME} -d ${DATABASE} -c ${COLLECTION} --jsonArray --drop
*/

// Task 2

// Use the already created database
use('boxOffice');

// Make the search in exMovieStarts collection for Task 2
db.exMovieStarts.find({ genre: { $size: 2 } }).pretty();

// Task 3

// Make the search in exMovieStarts collection for Task 3
db.exMovieStarts.find({ 'meta.aired': 2018 }).pretty();

// Task 4

// Make the search in exMovieStarts collection for Task 4
db.exMovieStarts.find({ ratings: { $elemMatch: { $gt: 8, $lt: 10 } } }).pretty();