#!/bin/bash

mongoimport tv-shows.json -d movieData -c movies --jsonArray --drop

# -d -> database
# -c -> collection
# --jsonArray -> show the content
# --drop -> drop the old data