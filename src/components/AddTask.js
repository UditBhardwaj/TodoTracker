import { useState } from 'react';
const AddTask = (props) => {
    
    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)
    
    const onSubmit = (e) => {
        e.preventDefault()

        if(!text){
            alert('Please add a task')
            return 
        }

        const id = Math.floor(Math.random()*10000) +1
        {props.onAdd({id, text, day, reminder})}

        setText('')
        setDay('')
        setReminder(false)
    }
    return (
        <form onSubmit = {onSubmit} className = 'add-form'>
            <div className = 'form-control'>
                <label>Task</label>
                <input value = {text} onChange = {(e)=>
                    setText(e.target.value)
                } 
                type = 'text' placeholder = 'Add Task'/>
            </div>
            <div className = 'form-control'>
                <label>Day & Time</label>
                <input input value = {day} onChange = {(e)=>
                    setDay(e.target.value)
                } 
                type = 'text' placeholder = 'Add Day and Time'/>
            </div>
            <div className = 'form-control form-control-check'>
                <label>Set Reminder</label>
                <input
                type = 'checkbox'
                checked = {reminder}
                value = {reminder} onChange = {(e)=>
                    setReminder(e.currentTarget.checked)
                } 
                />
            </div>
            <input type = 'submit' value = 'Add Task' className = 'btn btn-block'/>
        </form>
    )
}

export default AddTask
