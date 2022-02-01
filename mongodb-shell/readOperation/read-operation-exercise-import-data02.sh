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