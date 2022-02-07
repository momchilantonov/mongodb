use('contsctsData');

// Sort
db.contscts.explain().find({ 'dob.age': 35 }).sort({ gender: 1 });