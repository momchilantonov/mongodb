use('usersData');


// When you will work with math, don't set the numeric fields as a string without mongo block (e.g. NumberLong)
db.numeric.insertOne({ name: 'Angelina', amount: NumberInt('1500') });

db.numeric.updateOne({ name: 'Angelina ' }, { $inc: { amount: NumberInt('500') } });