// TASKS
// 1. Create a new collection ('sports') and upsert two new documents into it (wiht these fields: 'title', 'requiresTeam')
// 2. Update all documents which do require a team by adding a new field with the minimum amount of players required
// 3. Update all documents that require a team by increasing the number of required players by 10

// Task 1

// Create new collection and upsert teh required documents
use('sports');
db.sports.updateOne({}, { $set: { title: 'Tennis', requiredTeam: false } }, { upsert: true });
db.sports.updateOne({ title: 'Volleyball' }, { $set: { requiredTeam: true } }, { upsert: true });

// Task 2

// Update the requiered team documents with new field
db.sports.updateMany({ requiredTeam: true }, { $set: { requiredPlayers: 6 } });


// Task 3

// Update the required team documents by increase the required players with 10
db.sports.updateMany({ requiredTeam: true }, { $inc: { requiredPlayers: 10 } });