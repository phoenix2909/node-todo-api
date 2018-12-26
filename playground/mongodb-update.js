const {MongoClient, ObjectId} = require ('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDb server');

  const db = client.db('TodoApp');



  client.close();
});
