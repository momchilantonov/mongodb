// Use admin database
use('admin');

// Create the first user (Admin)
db.createUser(
    {
        user: 'Momchil',
        pwd: 'admin123',
        roles: ['userAdminAnyDatabase']
    }
);

// Auth the Admin user
db.auth('Momchil', 'admin123');