const { MongoClient, ObjectID, ObjectId } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

const id = new ObjectId()
console.log(id.id.length)
console.log(id.toHexString().length)

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database!')
    }
    
    const db = client.db(databaseName)

//     db.collection('users').insertOne({
//         _id: id,
//         name: 'Shekhar',
//         age: 23
//     }, (error, result) => {
//         if (error) {
//             return console.log('Unable to insert user')
//         }

//         console.log(result.ops)
//     })
// })

// db.collection('users').insertMany([
//     {
//         name: 'John',
//         age: 30
//     }, {
//         name: 'Snow',
//         age: 27
//     }
// ], (error, result) => {
//     if (error) {
//         return console.log('Unable to insert documents!')
//     }

//     console.log(result.ops)
//   })

// db.collection('tasks').insertMany([
//     {
//         description: 'Clean the house',
//         completed: true
//     },{
//         description: 'Renew inspection',
//         completed: false
//     }, {
//         description: 'Pot plants',
//         completed: false
//     }
// ], (error, result) => {
//     if (error) {
//         return console.log('Unable to insert tasks!')
//     }
//     console.log(result.ops)
//   })
})