use('users');

// Update (add) in specific field
db.users.updateMany({ 'hobbies.frequency': { $gt: 2 } }, { $set: { 'hobbies.$[el].goodFrequency': true } }, { arrayFilters: [{ 'el.frequency': { $gt: 2 } }] });