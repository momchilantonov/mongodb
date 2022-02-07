use('contactData');

// Create new collection and insert documents
db.contacts.insertOne({
    name: 'Momchil',
    hobbies: [
        'Sport',
        'Cooking'
    ],
    addresses: [
        {
            street: 'Main Street'
        },
        {
            street: 'Second Street'
        }
    ]
});

// Create an index of an array 'hobbies' (Multi Key)
db.contacts.createIndex({ hobbies: 1 });

// Check the results
db.contacts.explain('executionStats').find({ hobbies: 'Sport' });

// Create an index of an array 'addresses' (Multi Key)
db.contacts.createIndex({ addresses: 1 });

// Check the results
// Not searching in the indexes
db.contacts.explain('executionStats').find({ 'addresses.street': 'Main Street' });
// but with this syntax will search in the indexes
db.contacts.explain('executionStats').find({ addresses: {} });
// or
db.contacts.explain('executionStats').find({ addresses: { street: 'Main Street' } });

// You can create the index in a different way
db.contacts.createIndex({ 'addresses.street': 1 });

// Can't create a parallel arrays (two in one index)