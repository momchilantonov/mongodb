use('usersData');

// $match
db.persons.aggregate([
    { $match: { gender: 'female' } }
]);

// $group
db.persons.aggregate([
    { $match: { gender: 'female' } },
    { $group: { _id: { state: "$location.state" }, totalPersons: { $sum: 1 } } }
]);

// $sort
db.persons.aggregate([
    { $match: { gender: 'female' } },
    { $group: { _id: { state: "$location.state" }, totalPersons: { $sum: 1 } } },
    { $sort: { totalPersons: -1 } }
]);

// $project
db.persons.aggregate([
    {
        $project: {
            _id: 0,
            gender: 1,
            fullName: {
                $concat: [
                    { $toUpper: { $substrCP: ['$name.first', 0, 1] } },
                    {
                        $substrCP: [
                            '$name.first',
                            1,
                            { $subtract: [{ $strLenCP: '$name.first' }, 1] }
                        ]
                    },
                    ' ',
                    { $toUpper: { $substrCP: ['$name.last', 0, 1] } },
                    {
                        $substrCP: [
                            '$name.last',
                            1,
                            { $subtract: [{ $strLenCP: '$name.last' }, 1] }
                        ]
                    }
                ]
            }
        }
    }
]).pretty();

// Transform some date -> geoJSON (location)
// id field is need only on the firs project
db.persons.aggregate([
    {
        $project: {
            _id: 0,
            name: 1,
            email: 1,
            location: {
                type: 'Point',
                coordinates: [
                    {
                        $convert: {
                            input: '$location.coordinates.longitude',
                            to: 'double',
                            onError: 0.0,
                            onNull: 0.0
                        }
                    },
                    {
                        $convert: {
                            input: '$location.coordinates.latitude',
                            to: 'double',
                            onError: 0.0,
                            onNull: 0.0
                        }
                    },
                ]
            }
        }
    },
    {
        $project: {
            gender: 1,
            email: 1,
            location: 1,
            fullName: {
                $concat: [
                    { $toUpper: { $substrCP: ['$name.first', 0, 1] } },
                    {
                        $substrCP: [
                            '$name.first',
                            1,
                            { $subtract: [{ $strLenCP: '$name.first' }, 1] }
                        ]
                    },
                    ' ',
                    { $toUpper: { $substrCP: ['$name.last', 0, 1] } },
                    {
                        $substrCP: [
                            '$name.last',
                            1,
                            { $subtract: [{ $strLenCP: '$name.last' }, 1] }
                        ]
                    }
                ]
            }
        }
    }
]).pretty();


// Transform some date -> date
// id field is need only on the firs project
db.persons.aggregate([
    {
        $project: {
            _id: 0,
            name: 1,
            email: 1,
            birthdate: { $convert: { input: '$dob.date', to: 'date' } },
            age: "$dob.age",
            location: {
                type: 'Point',
                coordinates: [
                    {
                        $convert: {
                            input: '$location.coordinates.longitude',
                            to: 'double',
                            onError: 0.0,
                            onNull: 0.0
                        }
                    },
                    {
                        $convert: {
                            input: '$location.coordinates.latitude',
                            to: 'double',
                            onError: 0.0,
                            onNull: 0.0
                        }
                    }
                ]
            }
        }
    },
    {
        $project: {
            gender: 1,
            email: 1,
            location: 1,
            birthdate: 1,
            age: 1,
            fullName: {
                $concat: [
                    { $toUpper: { $substrCP: ['$name.first', 0, 1] } },
                    {
                        $substrCP: [
                            '$name.first',
                            1,
                            { $subtract: [{ $strLenCP: '$name.first' }, 1] }
                        ]
                    },
                    ' ',
                    { $toUpper: { $substrCP: ['$name.last', 0, 1] } },
                    {
                        $substrCP: [
                            '$name.last',
                            1,
                            { $subtract: [{ $strLenCP: '$name.last' }, 1] }
                        ]
                    }
                ]
            }
        }
    }
]).pretty();

// Shortcut for transforming date
db.persons.aggregate([
    {
        $project: {
            _id: 0,
            name: 1,
            email: 1,
            birthdate: { $toDate: '$dob.date' },
            age: "$dob.age",
            location: {
                type: 'Point',
                coordinates: [
                    {
                        $convert: {
                            input: '$location.coordinates.longitude',
                            to: 'double',
                            onError: 0.0,
                            onNull: 0.0
                        }
                    },
                    {
                        $convert: {
                            input: '$location.coordinates.latitude',
                            to: 'double',
                            onError: 0.0,
                            onNull: 0.0
                        }
                    }
                ]
            }
        }
    },
    {
        $project: {
            gender: 1,
            email: 1,
            location: 1,
            birthdate: 1,
            age: 1,
            fullName: {
                $concat: [
                    { $toUpper: { $substrCP: ['$name.first', 0, 1] } },
                    {
                        $substrCP: [
                            '$name.first',
                            1,
                            { $subtract: [{ $strLenCP: '$name.first' }, 1] }
                        ]
                    },
                    ' ',
                    { $toUpper: { $substrCP: ['$name.last', 0, 1] } },
                    {
                        $substrCP: [
                            '$name.last',
                            1,
                            { $subtract: [{ $strLenCP: '$name.last' }, 1] }
                        ]
                    }
                ]
            }
        }
    }
]).pretty();

// $isoWeekYear
db.persons.aggregate([
    {
        $project: {
            _id: 0,
            name: 1,
            email: 1,
            birthdate: { $toDate: '$dob.date' },
            age: "$dob.age",
            location: {
                type: 'Point',
                coordinates: [
                    {
                        $convert: {
                            input: '$location.coordinates.longitude',
                            to: 'double',
                            onError: 0.0,
                            onNull: 0.0
                        }
                    },
                    {
                        $convert: {
                            input: '$location.coordinates.latitude',
                            to: 'double',
                            onError: 0.0,
                            onNull: 0.0
                        }
                    }
                ]
            }
        }
    },
    {
        $project: {
            gender: 1,
            email: 1,
            location: 1,
            birthdate: 1,
            age: 1,
            fullName: {
                $concat: [
                    { $toUpper: { $substrCP: ['$name.first', 0, 1] } },
                    {
                        $substrCP: [
                            '$name.first',
                            1,
                            { $subtract: [{ $strLenCP: '$name.first' }, 1] }
                        ]
                    },
                    ' ',
                    { $toUpper: { $substrCP: ['$name.last', 0, 1] } },
                    {
                        $substrCP: [
                            '$name.last',
                            1,
                            { $subtract: [{ $strLenCP: '$name.last' }, 1] }
                        ]
                    }
                ]
            }
        }
    },
    { $group: { _id: { birthYear: { $isoWeekYear: "$birthdate" } }, numPersons: { $sum: 1 } } },
    { $sort: { numPersons: -1 } }
]).pretty();

// Pushing Elements Into Newly Created Arrays ($push)
db.personsDemos.aggregate([
    {
        $group: {
            _id: { age: '$age' },
            allHobbies: { $push: '$hobbies' }
        }
    }
]);

// $unwind Stage -> create document for every element from the array (hobbies)
db.personsDemos.aggregate([
    { $unwind: "$hobbies" },
    {
        $group: {
            _id: { age: "$age" },
            allHobbies: { $push: "$hobbies" }
        }
    }
]).pretty();

// Remove dublicates ($addToSet)
db.personsDemos.aggregate([
    { $unwind: "$hobbies" },
    {
        $group: {
            _id: { age: "$age" },
            allHobbies: { $addToSet: "$hobbies" }
        }
    }
]).pretty();

// Using projections with arrays ($slice from arrays)
db.personsDemos.aggregate([
    {
        $project: {
            _id: 0,
            examScore: { $slice: ["$examScores", 2, 1] }
        }
    }
]).pretty();

// Getting the Length of an Array ($size)
db.personsDemos.aggregate([
    {
        $project: {
            _id: 0,
            numScores: { $size: "$examScores" }
        }
    }
]).pretty();

// $filter
db.personsDemos.aggregate([
    {
        $project: {
            _id: 0,
            scores: { $filter: { input: '$examScores', as: 'sc', cond: { $gt: ["$$sc.score", 60] } } }
        }
    }
]).pretty();

// Applying multiple operations to Array
db.personsDemos.aggregate([
    { $unwind: "$examScores" },
    { $project: { _id: 1, name: 1, age: 1, score: "$examScores.score" } },
    { $sort: { score: -1 } },
    { $group: { _id: "$_id", name: { $first: "$name" }, maxScore: { $max: "$score" } } },
    { $sort: { maxScore: -1 } }
]).pretty();

// $bucket
db.persons
    .aggregate([
        {
            $bucket: {
                groupBy: '$dob.age',
                boundaries: [18, 30, 40, 50, 60, 120],
                output: {
                    numPersons: { $sum: 1 },
                    averageAge: { $avg: '$dob.age' }
                }
            }
        }
    ])
    .pretty();

db.persons.aggregate([
    {
        $bucketAuto: {
            groupBy: '$dob.age',
            buckets: 5,
            output: {
                numPersons: { $sum: 1 },
                averageAge: { $avg: '$dob.age' }
            }
        }
    }
]).pretty();

// Additional stages
db.persons.aggregate([
    { $match: { gender: "male" } },
    {
        $project: {
            _id: 0,
            gender: 1,
            name: { $concat: ["$name.first", " ", "$name.last"] },
            birthdate: { $toDate: "$dob.date" }
        }
    },
    { $sort: { birthdate: 1 } },
    { $skip: 10 },
    { $limit: 10 }
]).pretty();