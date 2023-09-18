import { useState } from 'react'
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import './App.css'

function App() {
    const[list, setList] = useState([]);
    const [input, setInput] = useState("")

    const handleInputChange = (e) => {
      setInput(e.target.value)
    }
    const addTask = () =>{
       if(input.trim() !== '') {
           const newTask = {
               id: Math.random(),
               task: input,
           }

           setList([...list, newTask]);
           setInput('')
       }
    }
    const deleteTask = (taskId) =>{
        const updatedList = list.filter((task) => task.id !== taskId);
        setList(updatedList)
    }

    return (
    <div className="container">
      <h1>to do app</h1>
      <input type="text"
             value={input}
             onChange={handleInputChange}
             placeholder={"Add task..."}
             size="50" />
        <button className="favorite styled"
                onClick={addTask} type="button" >Add</button>

        <ul>
            {list.map((task) => (
                <li key={task.id}>
                    {task.task}
                    <IconButton onClick={() => deleteTask(task.id)}>
                        <DeleteIcon/>
                    </IconButton>
                </li>
            ))}
        </ul>

    </div>



    )
}

export default App
