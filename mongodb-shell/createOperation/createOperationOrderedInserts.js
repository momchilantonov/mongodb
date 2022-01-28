// The normal behavior of mongo is to make recordings in order. If an error occurs, 
// the only documents that will be added to the collection will be the ones before the error

use('contactData');

/*
db.hobbies.insertMany([
    { '_id': 'sports', 'name': 'Sports' },
    { '_id': 'cooking', 'name': 'Cooking' },
    { '_id': 'dogs', 'name': 'Dogs' },
    { '_id': 'cats', 'name': 'Cats' },
    { '_id': 'music', 'name': 'Music' }
]);
*/

/* e.g. if you try to add an element with existing id
db.hobbies.insertMany([
    { '_id': 'fruits', 'name': 'Fruits' },
    { '_id': 'eating', 'name': 'Eating' },
    { '_id': 'cars', 'name': 'Cars' },
    { '_id': 'cats', 'name': 'Cats' }, -> here mongo will stop
    { '_id': 'swimming,', 'name': 'Swimming' }
]);
*/

// If you want mongo to check all inserts and not to stop where occurs an error,
// you can use 'ordered' parameter and set it to False (Defalult is set to True)
db.hobbies.insertMany([
    { '_id': 'fruits', 'name': 'Fruits' },
    { '_id': 'eating', 'name': 'Eating' },
    { '_id': 'cars', 'name': 'Cars' },
    { '_id': 'cats', 'name': 'Cats' },
    { '_id': 'swimming,', 'name': 'Swimming' }], // swimming now is added to the collection
    { ordered: false });