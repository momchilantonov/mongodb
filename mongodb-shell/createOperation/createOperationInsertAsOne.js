// Use insert() as insertOne() method to insert a document in the collection

use('contactData');

db.persons.insert({ 'name': 'Ivan', 'age': 41, 'hobbies': ['music', 'beer'] });