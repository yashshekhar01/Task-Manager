require('../src/db/mongoose')
const Task = require('../src/models/task')

// Task.findByIdAndDelete('62349421bda13c1ba79d83cb').then((task) => {
//     console.log(task)
//     return Task.countDocuments({ completed: false })
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

const deleteTaskAndCount = async (id) => {
    const task = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({ completed: false })
    return count
}

deleteTaskAndCount('6234938888789227fc51f3da').then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})