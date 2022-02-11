// Use new database
use('shop');

// Create user there
db.createUser(
    {
        user: 'Angelina',
        pwd: 'user123',
        roles: ['readWrite']
    }
);

// Befor auth this user, you must logout from the previus
db.logout();

// Now auth Angelina
db.auth('Angelina', 'user123');

// Create new prouct in products collection
db.products.insertOne(
    {
        name: 'book'
    }
);