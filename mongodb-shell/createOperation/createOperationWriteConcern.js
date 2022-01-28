// Use 'writeConcern'

use('contactData');

// Find more info
// https://docs.mongodb.com/manual/reference/write-concern/?_ga=2.247328004.1228575879.1643311548-1839237201.1643104544&_gac=1.150774468.1643126225.CjwKCAiA3L6PBhBvEiwAINlJ9FVpeVCbLpVcxBBaL2iTjw9wq_0paGQTeOYfx21951x9w7Kwkxc7MBoCLAMQAvD_BwE

// db.persons.insertOne({ name: 'Dimitar', age: 38 }, { writeConcern: { w: 0 } });
// db.persons.insertOne({ name: 'Dimitar', age: 38 }, { writeConcern: { w: 1 } });
// db.persons.insertOne({ name: 'Dimitar', age: 38 }, { writeConcern: { w: 2 } });
// db.persons.insertOne({ name: 'Dimitar', age: 38 }, { writeConcern: { w: 3 } });
// db.persons.insertOne({ name: 'Dimitar', age: 38 }, { writeConcern: { w: 1, j: false } });
// db.persons.insertOne({ name: 'Dimitar', age: 38 }, { writeConcern: { w: 1, j: true } });
db.persons.insertOne({ name: 'Dimitar', age: 38 }, { writeConcern: { w: 1, j: true, wtimeout: 200 } });