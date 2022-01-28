// Use insertMany() method to insert a document in the collection

use('contactData');

db.persons.insertMany([
    { 'name': 'Ivan', 'age': 41, 'hobbies': ['music', 'beer'] },
    { 'name': 'Petar', 'age': 25, 'hobbies': ['sport', 'dogs'] }
]);