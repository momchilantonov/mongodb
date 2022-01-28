// TASKS:
// 1. Insert multiple companies into a collection - both with isnertOne() and insertMany()
// 2. Deliberately insert duplicate ID data and 'fix' falling additions unordered inserts
// 3. Write data for a new company with both journaling being guaranteed and not being guaranteed

// Use (create) database with name 'companiesData'
use('companiesData');

// Task 1

// insertOne()
db.companies.insertOne({
    _id: 'dell',
    name: 'DELL',
    type: 'IT sector',
    address: 'USA, No real assress',
    employees: 5000,
    departments: [
        {
            name: 'Software',
            employees: 2800
        }
    ]
});

// Show the result
db.companies.find().pretty()

// insertMany()
db.companies.insertMany([
    {
        _id: 'hp',
        name: 'HP',
        type: 'IT Sector',
        address: 'USA, No real address',
        employees: 6500,
        departments: [
            {
                name: 'Hardware',
                employees: 1350
            }
        ]
    },
    {
        _id: 'lenovo',
        name: 'Lenovo',
        type: 'IT Sector',
        address: 'China, No real address',
        employees: 4800,
        departments: [
            {
                name: 'Test',
                employees: 350
            }
        ]
    },
    {
        _id: 'acer',
        name: 'Acer',
        type: 'IT Sector',
        address: 'USA, No real address',
        employees: 2450,
        departments: [
            {
                name: 'R&D',
                employees: 780
            }
        ]
    },
]);

// Show the result
db.companies.find().pretty()

// Task 2

// The second document is with dublicated ID
db.companies.insertMany([
    {
        _id: 'toshiba',
        name: 'Toshiba',
        type: 'IT Sector',
        address: 'Japan, No real address',
        employees: 8000,
        departments: [
            {
                name: 'Software',
                employees: 4820
            }
        ]
    },
    {
        _id: 'lenovo',
        name: 'Lenovo',
        type: 'IT Sector',
        address: 'Korea, No real address',
        employees: 1800,
        departments: [
            {
                name: 'Test',
                employees: 50
            }
        ]
    },
    {
        _id: 'samsung',
        name: 'samsung',
        type: 'IT Sector',
        address: 'China, No real address',
        employees: 7450,
        departments: [
            {
                name: 'R&D',
                employees: 1780
            }
        ]
    }],
    { ordered: false });

// Show the result
db.companies.find().pretty()

// Task 3

// Journaling being guaranteed
db.companies.insertOne({
    _id: 'philips',
    name: 'Philips',
    type: 'Electronic Sector',
    address: 'Japan, No real address',
    employees: 1080,
    departments: [
        {
            name: 'R&D',
            employees: 85
        }
    ]
},
    {
        writeConcern: {
            w: 1,
            j: true
        }
    });

// Journaling being guaranteed
db.companies.insertOne({
    _id: 'saeco',
    name: 'Saeco',
    type: 'Electronic Sector',
    address: 'China, No real address',
    employees: 870,
    departments: [
        {
            name: 'Test',
            employees: 15
        }
    ]
},
    {
        writeConcern: {
            w: 1,
            j: false
        }
    });

// Show the result
db.companies.find().pretty();