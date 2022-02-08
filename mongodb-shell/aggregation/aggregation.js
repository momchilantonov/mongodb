use('usersData');

// use $match instead find()
db.persons.aggregate([
    {
        $match: {
            gender: 'female'
        }
    }
]);