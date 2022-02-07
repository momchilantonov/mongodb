use('contactsData')

// Some tools (methods) that help us to analyze the result
// explain()
db.contacts.explain().find({ 'dob.age': { $gt: 60 } });
// explain('executionStats')
db.contacts.explain('executionStats').find({ 'dob.age': { $gt: 60 } });
// explain('queryPlanner'), explain('allPlansExecution')

// Create an Index
// Ascending
db.contacts.createIndex({ 'dob.age': 1 });
// Descending
db.contacts.createIndex({ 'dob.age': -1 });