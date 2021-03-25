import React from 'react';
import './App.css';
import Header from './components/Header';
import Tasks from './components/Tasks';
import { useState, useEffect } from 'react';
import AddTask from './components/AddTask';

function App() {
    const [showAddTask, setShowAddTask] = useState(false)
    const [tasks,setTasks] = useState([])
    
    useEffect(() => {
      const getTasks = async () => {
        const tasksFromServer = await fetchTasks()
        setTasks(tasksFromServer)
      }
      getTasks()
    }, [])

    const fetchTasks = async () => {
      const res = await fetch('http://localhost:5000/tasks')
      const data = await res.json()

      return data
    }

    const deleteTask = async (id) =>{
           setTasks(tasks.filter((task) => task.id !== id))
    }
    
    const toggleReminder = (id) => {
           setTasks(tasks.map((task) => 
               task.id === id ? { ...task , reminder:!task.reminder} : task
           ))
    }
    
    const addTasks = async (task) =>{
      setTasks([...tasks, task])
    }

    const clickHello = () => {
       setShowAddTask(!showAddTask)
    }
    return (
      <>
      <Header title = 'Tracker' clickHello = {clickHello} showAdd = {showAddTask}/>
      {showAddTask ? <AddTask onAdd = {addTasks}/> : ''}
      {tasks.length >0 ?(
        <Tasks tasks = {tasks} onDelete = {deleteTask} toggleReminder = {toggleReminder}/>
      ):(
        'No task to show'
      )}
      
      </>
    );
}

export default App;