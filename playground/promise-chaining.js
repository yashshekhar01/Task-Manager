require('../src/db/mongoose')
const User = require('../src/models/user')

User.findByIdAndUpdate('62348e4a9eecf433f1c41bea', { age: 1 }).then((user) => {
    console.log(user)
    return User.countDocuments({ age: 1})
}).then((result) => {
    console.log(result)
}).catch((e) => {
    console.log(e)
})