use('users');

// Add new field in all find documents by particular filed 
db.users.updateMany({ 'hobbies.frequency': { $gt: 2 } }, { $set: { 'hobbies.$.goodFrequency': true } });

// Update all fields in a particular documet
db.users.updateMany({ age: { $gt: 10 } }, { $inc: { 'hobbies.$[].frequency': -1 } });