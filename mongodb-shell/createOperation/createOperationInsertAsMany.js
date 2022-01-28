// Use insert() as insertMany() method to insert a document in the collection

use('contactData');

db.persons.insert([
    { 'name': 'Ivan', 'age': 41, 'hobbies': ['music', 'beer'] },
    { 'name': 'Petar', 'age': 25, 'hobbies': ['sport', 'dogs'] }
]);