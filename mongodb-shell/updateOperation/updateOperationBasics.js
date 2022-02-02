use('users');

// Update with updateOne() and $set
db.users.updateOne({ _id: ObjectId('61fa356cb6922c8dec9ed6d7') }, { $set: { hobbies: [{ title: 'Sports', frequency: 5 }, { title: 'Cooking', frequency: 3 }] } });

// Update with updateMany() and $set
db.users.updateMany({ 'hobbies.title': 'Sports' }, { $set: { isSporty: true } });

// Update multiple fields with $set
db.users.updateOne({ _id: ObjectId('61fa356cb6922c8dec9ed6d7') }, { $set: { age: 40, phone: 0855555555 } });

// Incrementing values
db.users.updateOne({ name: 'Manuel' }, { $inc: { age: 2 } });

// Decrementing values 
db.users.updateOne({ name: 'Manuel' }, { $inc: { age: -1 } });

// Combine $inc and $set
db.users.updateOne({ name: 'Manuel' }, { $inc: { age: 2 }, $set: { isSporty: false } });
// If you use same field, you will get an error
// db.users.updateOne({ name: 'Manuel' }, { $inc: { age: 2 }, $set: {age: 30} });

// Use $min -> change the value only if the new one is lower than the old one
db.users.updateOne({ name: 'Chris' }, { $min: { age: 35 } });

// Use $max -> change the value only if the new one is greater than the old one
db.users.updateOne({ name: 'Chris' }, { $max: { age: 38 } });

// Use $mul -> multiply
db.users.updateOne({ name: 'Chris' }, { $mul: { age: 1.1 } });

// Rid (drop) of fields
// db.users.updateMany({ isSporty: true }, { $set: { phone: null } });
db.users.updateMany({ isSporty: true }, { $unset: { phone: '' } });

// Renaming the fields
db.users.updateMany({}, { $rename: { age: 'totalAge' } });

// Use upsert() -> create a doc with update operation
db.users.updateOne({ name: 'Maria' }, { $set: { age: 29, hoobies: [{ title: 'Good food', frequency: 5 }], isSporty: true } }, { upsert: true });