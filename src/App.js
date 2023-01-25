import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Stack from 'react-bootstrap/Stack';
import './App.css';
import { Task } from './Task'

function App() {
  const [taskList, setTaskList] = useState([]);
  const [newTask, setNewTask] = useState("");

  const updateText = (event) => {
    setNewTask(event.target.value);

  }

  const addTask = () => {
    const task = {
      id: taskList.length === 0 ? 1: taskList[taskList.length - 1].id + 1,
      taskValue: newTask,
      isCompleted: false,
    }
    setTaskList([...taskList, task]);
  }

  const completeTask = (id) => {
    
    setTaskList(taskList.map((task) => {
      if(task.id === id){
        return {...task, isCompleted: true};
      }
      return task
    }))
  }

  const deleteTask = (id) => {
    setTaskList(taskList.filter((task) => task.id !== id))

  }

  return (
    <div className="App">
      <div className='Title'><h1> To-Do App</h1></div>
      <div className='AddTask'>
        <Stack direction="horizontal" gap={3}>
          <Form.Control className='me-auto' type="text" placeholder="Add Item" onChange={updateText}/>
          <Button variant='primary' onClick={addTask}>Add</Button>
        </Stack>
      </div>
      <div className='TaskList'>
        {taskList.map((task) => {
          return (
            <Task key={task.id} id={task.id} taskValue={task.taskValue} isCompleted={task.isCompleted} completeTask={completeTask} deleteTask={deleteTask}/>
          )
        })}
        
      </div>
    </div>
  );
}

export default App;
