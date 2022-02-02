#!/bin/bash

FILENAME="users.json"
DATABASE="users"
COLLECTION="users"

if [[ ! -e "${FILENAME}" ]]
then
  echo "Cannot open ${FILENAME}"
  exit 1
fi

echo "Importing ${FILENAME}"
mongoimport ${FILENAME} -d ${DATABASE} -c ${COLLECTION} --jsonArray --drop