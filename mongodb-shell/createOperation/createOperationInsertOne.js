// Use insertOne() method to insert a document in the collection

use('contactData');

db.persons.insertOne({ 'name': 'Momchil', 'age': 37, 'hobbies': ['sport', 'music', 'coding'] });