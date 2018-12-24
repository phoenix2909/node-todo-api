const {MongoClient, ObjectId} = require ('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDb server');

  const db = client.db('TodoApp');

// deleteMany
  // db.collection('Todos').deleteMany({text : 'Eat lunch'}).then((result) => {
  //   console.log(result);
  // });

  //deleteOne
  // db.collection('Todos').deleteOne({text : 'Eat lunch'}).then((result) => {
  //   console.log(result);
  // })

  // findOneAndDelete
  // db.collection('Todos').findOneAndDelete({text : 'Something to do'}).then((result) => {
  //   console.log(result);
  // })

  //deleteMany Users
  db.collection('Users').deleteMany({name : 'Sowrabh'}).then((result) => {
    console.log(result);
  })

  //findOneAndDelete user with ObjectId("5c1b7b6727a87a43ffbc6a0d")
  db.collection('Users').findOneAndDelete({_id : new ObjectId("5c1b7b6727a87a43ffbc6a0d")}).then((result) => {
    console.log(result);
  })
  client.close();
});
