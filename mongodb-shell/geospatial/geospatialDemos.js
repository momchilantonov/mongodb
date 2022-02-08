use('awesomeplaces');

// Add some places in the database
db.places.insertOne(
    {
        name: 'California Academy of Sciences',
        location: {
            type: 'Point',
            coordinates: [
                -122.471786,
                37.768357
            ]
        }
    }
);

// Good to create index for near location, using '2dsphere'
db.places.createIndex(
    {
        location: '2dsphere'
    }
);

// Search for a near place
db.places.find(
    {
        location: {
            $near: {
                $geometry: {
                    type: 'Point',
                    coordinates: [
                        -122.471786,
                        37.768357
                    ]
                }
            }
        }
    }
);

// Specify what will be the near place with $maxDistance and $minDistance in meters
db.places.find(
    {
        location: {
            $near: {
                $geometry: {
                    type: 'Point',
                    coordinates: [
                        -122.471786,
                        37.768357
                    ]
                },
                $maxDistance: 500,
                $minDistance: 0
            }
        }
    }
);

// Let insert some location
db.places.insertOne(
    {
        name: 'Conservatory of Flowers',
        location: {
            type: 'Point',
            coordinates: [
                -122.471786,
                37.768357
            ]
        }
    }
);

db.places.insertOne(
    {
        name: 'National AIDS Memorial Grove',
        location: {
            type: 'Point',
            coordinates: [
                -122.463011,
                37.7697342
            ]
        }
    }
);

db.places.insertOne(
    {
        name: 'Music Concourse',
        location: {
            type: 'Point',
            coordinates: [
                -122.465264,
                37.7691028
            ]
        }
    }
);
// This one is not in the certain area
db.places.insertOne(
    {
        name: 'Museum of Craft and Design',
        location: {
            type: 'Point',
            coordinates: [
                -122.407863,
                37.7510247
            ]
        }
    }
);

// Find a place in a certain area
// Create a certain area
var p1 = [-122.454708, 37.774737];
var p2 = [-122.453008, 37.766416];
var p3 = [-122.510088, 37.763937];
var p4 = [-122.511063, 37.771359];
// Search in that area
db.places.find(
    {
        location: {
            $geoWithin: {
                $geometry: {
                    type: 'Polygon',
                    coordinates: [[
                        p1,
                        p2,
                        p3,
                        p4,
                        p1
                    ]]
                }
            }
        }
    }
);

// Add this area in 'areas' collection
db.areas.insertOne(
    {
        name: 'Golden Gate Park',
        area: {
            type: 'Polygon',
            coordinates: [[
                p1,
                p2,
                p3,
                p4,
                p1
            ]]
        }
    }
);

// Create an index for area in '2dsphere'
db.areas.createIndex(
    {
        area: '2dsphere'
    }
);

// Find if a user (person) is in the area
// Get coordinates for user inside that area
var user1 = [-122.483471, 37.770832];
// Search
db.areas.find(
    {
        area: {
            $geoIntersects: {
                $geometry: {
                    type: 'Point',
                    coordinates: user1
                }
            }
        }
    }
);
// Get coordinates for user outside that area
var user2 = [-122.481048, 37.774247];
// Search
db.areas.find(
    {
        area: {
            $geoIntersects: {
                $geometry: {
                    type: 'Point',
                    coordinates: user2
                }
            }
        }
    }
);

// Find a place with certain radius
// Get a random point
var randomPoint = [-122.468942, 37.769698]
// Search in 1 km radius (1 / 6378.1) 
db.places.find(
    {
        location: {
            $geoWithin: {
                $centerSphere: [
                    randomPoint,
                    1 / 6378.1
                ]
            }
        }
    }
);