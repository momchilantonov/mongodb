use('contactData');

// Create new collection and insert some documents
db.products.insertMany([
    {
        title: 'A book',
        description: 'This is an awesome book'
    },
    {
        title: 'T-Shirt',
        description: 'This T-Shirt is red and its awesome'
    }
]);

// Create a text index
db.products.createIndex(
    {
        description: 'text'
    }
);

// Check the result
db.products.find(
    {
        $text: {
            $search: 'red'
        }
    }
);

// If you want to search for paragraph
db.products.find(
    {
        $text: {
            $search: "\"awesome book\""
        }
    }
);

// Sorting
db.products.find(
    {
        $text: {
            $search: "\"awesome t-shirt\""
        }
    },
    {
        score: {
            $meta: 'textScore'
        }
    }
);

// Combine text indexes
db.products.createIndex(
    {
        title: 'text',
        description: 'text'
    }
);

// Exclude text with minus '-'
db.products.find(
    {
        $text: {
            $search: 'awesome -t-shirt'
        }
    }
);

// Set language and weights
db.products.createIndex(
    {
        title: 'text',
        description: 'text'
    },
    {
        default_language: 'english',
        weights: {
            title: 1,
            description: 10
        }
    }
);