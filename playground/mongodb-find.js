const {MongoClient, ObjectId} = require ('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDb server');

  const db = client.db('TodoApp');

  // db.collection('Todos').find({
  //   _id : new ObjectId("5c1b79e6eaf93c40cc392e96")
  // }).toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log('Unable to fetch todos',err);
  // });

  // db.collection('Todos').find().count().then((count) => {
  //   console.log('Todos');
  //   console.log(`Todos count: ${count}`);
  // }, (err) => {
  //   console.log('Unable to fetch todos',err);
  // });

  db.collection('Users').find({
    name : 'Sowrabh'
  }).toArray().then((data,count) => {
    console.log(`Users`);
    console.log(JSON.stringify(data, undefined, 2));
  }, (err) => {
    console.log(`Unable to find the user with name ${name}`);
  })
  // client.close();
});
