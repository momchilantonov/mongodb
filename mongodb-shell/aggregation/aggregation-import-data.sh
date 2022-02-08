#!/bin/bash

FILENAME="persons.json"
DATABASE="usersData"
COLLECTION="persons"

if [[ ! -e "${FILENAME}" ]]
then
  echo "Cannot open ${FILENAME}"
  exit 1
fi

echo "Importing ${FILENAME} ..."
mongoimport ${FILENAME} -d ${DATABASE} -c ${COLLECTION} --jsonArray --drop