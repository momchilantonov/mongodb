#!/bin/bash

FILENAME="tv-shows.json"
DATABASE="movieData"
COLLECTION="movies"

if [[ ! -e "${FILENAME}" ]]
then
  echo "Cannot open ${FILENAME}"
  exit 1
fi

echo "Importing ${FILENAME}"
#this is the important script for mango imports
mongoimport ${FILENAME} -d ${DATABASE} -c ${COLLECTION} --jsonArray --drop

# -d -> database
# -c -> collection
# --jsonArray -> show the content
# --drop -> drop the old data