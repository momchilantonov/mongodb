// Logout from Angelina acc
db.logout();

// Go to admin database
use('admin');

// Login with the admin acc to update
db.auth('Momchil', 'admin123');

// Return to the database that you want to update acc
use('shop');

// Update roles (yuo can update user or pwd)
db.updateUser('Angelina', { roles: ['readWrite', { role: 'readWrite', db: 'blog' }] });

// Logout the admin
db.logout();

// Login again with the new credentials or what you changed
db.auth('Angelina', 'user123');

// Use the corect database to write there with Angelina
use('blog');

// Insert a document
db.posts.insertOne(
    {
        title: 'New title',
        content: 'This is a new post'
    }
);