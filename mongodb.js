// CRUD Create Read Update Delete

const { MongoClient, ObjectID, ObjectId } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'



MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database!')
    }
    
    const db = client.db(databaseName)

    // db.collection('users').findOne({ _id: new ObjectID("6230a568fddd5315862ec38f") }, (error, user) => {
    //     if(error) {
    //         return console.log('Unable to fetch')
    //     }

    //     console.log(user)
    // })

    // db.collection('users').find({ age: 27 }).toArray((error, users) => {
    //     console.log(users)
    // })
    
    db.collection('tasks').findOne({ _id: new ObjectId("6230b13e0a64cbd1a5c279f4") }, (error, task) => {
        console.log(task)
    })

    db.collection('tasks').find({ completed: false}).toArray((error, tasks) => {
        console.log(tasks)
    })
})