const connection = require('./conection')
const getAll = async () =>{
    const tasks = await connection.execute('SELECT * FROM tasks')
    return tasks[0]
}

const createTask = async (task)=>{

    const {title} = task

    const dateUTC = new Date(Date.now()).toDateString()

    const query = 'INSERT INTO tasks(title, status, created_at) VALUES (?,?,?)'

    const createdTasks = await connection.execute(query, [title,'pendente', dateUTC])

    return {insertId: createdTasks}

}

const deleteTask = async (id)=>{

    const query = 'DELETE FROM tasks WHERE id = ?'

     const removeTask = await connection.execute(query,[id])
     return removeTask
}

const updateTask = async (id, tasks)=>{

    const {title, status} = tasks

    const query = 'UPDATE tasks SET title = ?, status = ?, id = ?'

    const [uptadedTasks] = await connection.execute(query,[title,status,id])

}

module.exports = {
    getAll,
    createTask,
    deleteTask,
    updateTask
}