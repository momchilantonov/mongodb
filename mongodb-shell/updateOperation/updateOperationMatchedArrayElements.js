use('users');

// Find all documents that have hobbies and frequency
// That will show all documents that have certian hobbies and frequency in the content (any fields)
db.users.find({ $and: [{ 'hobbies.title': 'Sports' }, { 'hobbies.frequency': { $gte: 3 } }] });

// To find all documents that have hobbies and frequency in exactly one field
db.users.find({ hobbies: { $elemMatch: { title: 'Sports', frequency: { $gte: 3 } } } });

// To update that field (add new field in these documents with (field.$.newField)
db.users.updateMany({ hobbies: { $elemMatch: { title: 'Sports', frequency: { $gte: 3 } } } }, { $set: { 'hobbies.$.heighFrequency': true } });