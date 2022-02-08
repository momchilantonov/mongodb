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
db.friends.aggregate([
    {
        $project: {
            _id: 0,
            numScores: { $size: "$examScores" }
        }
    }
]).pretty();