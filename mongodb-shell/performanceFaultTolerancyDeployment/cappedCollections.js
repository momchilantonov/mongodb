use('performence')

// Create capped collection 
db.createCollection('capped', { capped: true, size: 10000, max: 3 });

// Insert three (max) documents as we specified when the collection was creeated.
db.capped.insertOne({ name: 'Momchil' });
db.capped.insertOne({ name: 'Angelina' });
db.capped.insertOne({ name: 'Karinal' });

// Insert one more
db.capped.insertOne({ name: 'Antoaneta' });

// And one more
db.capped.insertOne({ name: 'Ira' });

// And one more
db.capped.insertOne({ name: 'Yarick' });

// Watch the results :)!
// The behaviour is as a set