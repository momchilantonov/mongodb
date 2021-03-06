// TASK:
// Create a collection with name 'posts'.
// Add 3 posts with 'name', 'age', and 'email' fields. 

// Use 'blog' name for database
use('blog');

// Create 'posts' collection
db.posts.insertMany([
    {
        'title': 'My first post',
        'text': 'I hope you like it!',
        'tags': ['new', 'tech', 'love'],
        'creator': ObjectId('61f1544b727d26fa478da4a6'),
        'comments': [{ 'text': 'I like this post', 'author': ObjectId('61f1544b727d26fa478da4a7') }]
    },
    {
        'title': 'Hi, my name is Angelina',
        'text': 'Nice to meet you!',
        'tags': ['new', 'meetings'],
        'creator': ObjectId('61f1544b727d26fa478da4a7'),
        'comments': [{ 'text': 'Nice to meet you Angelina', 'author': ObjectId('61f1544b727d26fa478da4a6') }]
    },
    {
        'title': 'I am a sweet baby',
        'text': 'Look at my eyes',
        'tags': ['babies', 'love'],
        'creator': ObjectId('61f1544b727d26fa478da4a8'),
        'comments': [{ 'text': 'You are so sweet!', 'author': ObjectId('61f1544b727d26fa478da4a7') }]
    },
]);

// Check what is inserted in database
db.posts.find().pretty();