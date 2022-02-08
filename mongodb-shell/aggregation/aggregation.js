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