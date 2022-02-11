use('usersData');


// It's good to keep the long numbers as a string
db.numeric.insertOne({ company: 'Apple', valuation: NumberLong('9223372036854775807') });