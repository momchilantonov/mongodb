// TASKS
// 1. Insert 3 patient records with at least 1 history entry per patient
// 2. Update patient data of 1 patientwith new age, name and history entry
// 3. Find all patients who are older than 30
// 4. Delete all patients who got a cold as a desiase

// Task 1

// Select the database to use
use('hospital');

// Insert the patients (documents) into a new collection with name 'patientsData'
db.patientsData.insertMany([
    { 'firstName': 'Ivan', 'lastName': 'Ivanov', 'age': 32, 'history': [{ 'desiese': 'cold', 'treatment': 1 }] },
    { 'firstName': 'Peter', 'lastName': 'Petrov', 'age': 65, 'history': [{ 'desiese': 'cancer', 'treatment': 124 }] },
    { 'firstName': 'Maria', 'lastName': 'Angelova', 'age': 19, 'history': [{ 'desiese': 'fracture', 'treatment': 87 }] }
]);

// Take a look at the result
db.patientsData.find().pretty();

// Task 2

// Update a randomly chosen patient
db.patientsData.updateOne(
    { 'firstName': 'Peter' }, { $set: { 'lastName': 'Georgiev', 'age': 32, 'history': [{ 'desiese': 'stress', 'treatment': 202 }] } }
);

// Take a look at the result
db.patientsData.find().pretty();

// Task 3

// Filter all patients that are olderthan 30
db.patientsData.find({ age: { $gt: 30 } }).pretty();

// Task 4

// Delete all patients with desiese 'cold'
db.patientsData.deleteMany({ "history.desiese": "cold" });

// Take a look at the result
db.patientsData.find().pretty();