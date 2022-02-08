// TASKS
// 1. Pick 3 points on Google Maps and store them in a collection
// 2. Pick a point and find the nearest point within a min and max distance
// 3. Pick an area and see which points (that are stored in the collection) it contains
// 4. Store at least one area in a different collection
// 5. Pick a point and find out which areas in your collection containt that point

// Task 1

// Use new database with name 'geoSpatialData'
use('geoSpatialData');

// Pick 3 random points on Google Maps
var name1 = 'McDonalds';
var name2 = 'Djordjo';
var name3 = 'LaRocca';
var point1 = [23.375828096464076, 42.6475552322083];
var point2 = [23.368194840325156, 42.643593517493194];
var point3 = [23.380006886321155, 42.64280114427469];

// Store the points in 'places' collection
db.places.insertMany([
    {
        name: name1,
        location: {
            type: 'Point',
            coordinates: point1
        }
    },
    {
        name: name2,
        location: {
            type: 'Point',
            coordinates: point2
        }
    },
    {
        name: name3,
        location: {
            type: 'Point',
            coordinates: point3
        }
    }
]);

// Task 2

// Pick a random point
var randomPoint = [23.37928256274593, 42.64397603888332];

// Create a 2dsphere index
db.places.createIndex(
    {
        location: '2dsphere'
    }
);

// Search for the nearest place
db.places.find(
    {
        location: {
            $near: {
                $geometry: {
                    type: 'Point',
                    coordinates: randomPoint
                },
                $maxDistance: 500,
                $minDistance: 100
            }
        }
    }
);

// Task 3

// Pick an area with two of places into it
var areaPoint1 = [23.367196946020712, 42.64392326618175];
var areaPoint2 = [23.36944586082489, 42.643590117275615];
var areaPoint3 = [23.368094950184698, 42.64261938012391];

// Check which places are into the area
db.places.find(
    {
        location: {
            $geoWithin: {
                $geometry: {
                    type: 'Polygon',
                    coordinates: [[
                        areaPoint1,
                        areaPoint2,
                        areaPoint3,
                        areaPoint1
                    ]]
                }
            }
        }
    }
);

// Task 4

// Store the created area
db.areas.insertOne(
    {
        name: 'Djordjo Area',
        area: {
            type: 'Polygon',
            coordinates: [[
                areaPoint1,
                areaPoint2,
                areaPoint3,
                areaPoint1
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

// Task 5

// Pick one point inside the saved area, and one outside
var insidePoint = [23.36857128283817, 42.64349246984496];
var outsidePoint = [23.37236632660196, 42.64579575958524];

// Check the inside point
db.areas.find(
    {
        area: {
            $geoIntersects: {
                $geometry: {
                    type: 'Point',
                    coordinates: insidePoint
                }
            }
        }
    }
);

// Check the outside point
db.areas.find(
    {
        area: {
            $geoIntersects: {
                $geometry: {
                    type: 'Point',
                    coordinates: outsidePoint
                }
            }
        }
    }
);