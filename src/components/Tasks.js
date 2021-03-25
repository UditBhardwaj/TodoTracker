import Task from './Task'
const Tasks = (props) => {
    return (
        <div className = 'task'>
            {
                props.tasks.map((task) => (
                    <Task key = {task.id} task = {task} onDelete = {props.onDelete} toggleReminder = {props.toggleReminder}></Task>
                ))
            }
        </div>
    )
}

export default Tasks
