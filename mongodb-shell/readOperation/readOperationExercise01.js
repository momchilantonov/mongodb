// TASKS
// 1. Import the atached data into a new database (e.g. boxOffice) and collection (e.g. movieStarts)
// 2. Search all movies that have a rating higher than 9.2 and a runtime lower than 100 minutes
// 3. Search all movies that have a genre 'drama' or 'action'
// 4. Search all movies where visitors exceeded expectedVisitors

// Task 1

// Import the data with read-operation-exercise-import-data01.sh. The shell file is created separately.

/*
#!/bin/bash

FILENAME="boxoffice.json"
DATABASE="boxOffice"
COLLECTION="movieStarts"

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

// Make the search in movieStarts collection for Task 2
// Var 1
db.movieStarts.find({ 'meta.rating': { $gt: 9.2 }, 'meta.runtime': { $lt: 100 } }).pretty();
// Var 2
db.movieStarts.find({ $and: [{ 'meta.rating': { $gt: 9.2 } }, { 'meta.runtime': { $lt: 100 } }] }).pretty();

// Task 3

// Make the search in movieStarts collection for Task 3
db.movieStarts.find({ $or: [{ genre: 'drama' }, { genre: 'action' }] }).pretty();

// Task 4

// Make the search in movieStarts collection for Task 4
db.movieStarts.find({ $expr: { $gt: ['$visitors', '$expectedVisitors'] } }).pretty();