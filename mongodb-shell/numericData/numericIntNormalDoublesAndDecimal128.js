use('usersData');

db.numeric.insertOne({ a: 0.3, b: 0.1 });

// This will not work corect. The result will be e.g 0.19999999998 
db.numeric.aggregate([
    {
        project: {
            result: { $substract: ['$a', '$b'] }
        }
    }
]);

// To calculate corect you need to use Decimal128
db.numeric.insertOne({ a1: NumberDecimal('0.3'), b1: NumberDecimal('0.1') });

db.numeric.aggregate([
    {
        project: {
            result: { $substract: ['$a1', '$b1'] }
        }
    }
]);