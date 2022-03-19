require('../src/db/mongoose')
const Task = require('../src/models/task')

Task.findByIdAndDelete('62349421bda13c1ba79d83cb').then((task) => {
    console.log(task)
    return Task.countDocuments({ completed: false })
}).then((result) => {
    console.log(result)
}).catch((e) => {
    console.log(e)
})