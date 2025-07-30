import React, { useEffect, useState } from "react";
import { Menu } from "@mui/material";
import Tab from "./menu.jsx";

function ToDoList() {
    const [tasks, setTasks] = useState([
        {
            nameTask: "abc",
            state_task: true,
            id: 1
        },
        {
            nameTask: "2222",
            state_task: false,
            id: 2
        }


    ]);

    const [newTask, setNewTask] = useState(
    );
    const [input, setInput] = useState("");


    function handleInputChange(event) {
        setInput(event.target.value);
    }

    function addTask() {
        if (input.trim() !== "") {
            const newTask = { nameTask: input.trim(), state_task: false, id: Date.now(), };
            setTasks(t => [...t, newTask]);

            setInput("");
        }
    }

    function deleteTask(index) {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
        setCurrent(updatedTasks);

    }


    const [tab, setTab] = useState('All');


    const filteredTodos = tasks.filter(todo => {
        if (tab === 'Active') return !todo.state_task;
        if (tab === 'Completed') return todo.state_task;
        return true; // All
    });


    function ShowTask(filter) {

        if (filter === "All") {
            document.getElementById("add").style.display = "block";
            document.getElementById("btn-deleteAll").style.display = "none";
            const items = document.querySelectorAll('.delete-button');
            items.forEach(item => {
                item.style.display = "none"
            })

            setTab('All');
            setActiveFilter('All')


        }
        else if (filter === "Active") {
            document.getElementById("add").style.display = "block";
            document.getElementById("btn-deleteAll").style.display = "none";
            const items = document.querySelectorAll('.delete-button');
            items.forEach(item => {
                item.style.display = "none"
            })

            setTab('Active')
            setActiveFilter('Active')



        }
        else {
           
            document.getElementById("add").style.display = "none";
            document.getElementById("btn-deleteAll").style.display = "flex";
            const items = document.querySelectorAll('.delete-button');
            for (let i = 0; i < items.length; i++) {
                items[i].style.display = "inline"
            }
            const taskst = document.getElementsByClassName('nameTask')

            for (let i = 0; i < taskst.length; i++) {
                taskst[i].style.textDecoration = 'line-through';
            }
            setTab('Completed')
            setActiveFilter('Completed')


        }

    }
    


    const filters = ["All", "Active", "Completed"];
    const [activeFilter, setActiveFilter] = useState("All");

    useEffect(() => {
        console.log(activeFilter)
            if (filters === 'All') {
      setActiveFilter(tasks);
    } else if (filters === 'Active') {
      setActiveFilter(tasks.filter(todo => !todo.state_task));
    } else if (activeFilter === 'Completed') {
         const items = document.querySelectorAll('.delete-button');
            for (let i = 0; i < items.length; i++) {
                items[i].style.display = "inline"
            }
        console.log("tasks")
    }

    }, [activeFilter])

    const handleToggle = (id) => {
        setTasks(prevTasks =>
            prevTasks.map(todo =>
                todo.id === id ? { ...todo, state_task: !todo.state_task } : todo
            )
        );

     
        
    };

    const deleteCompletedTasks = () => {
        const remainingTasks = tasks.filter(task => !task.state_task);
        setTasks(remainingTasks);
    };




    return (
        <>
            <h1>#todo</h1>
            <div>
                {filters.map((filter) => (
                    <button
                        key={filter}
                        className={activeFilter === filter ? "btn-tab active" : "btn-tab"}
                        onClick={() => {

                            ShowTask(filter)


                        }}
                    >
                        {filter}
                    </button>
                ))}
            </div>
            <div className="line"></div>

            <div>
                <div className="ADD" id="add">
                    <input type="text"
                        placeholder="Enter a task"
                        value={input}
                        onChange={handleInputChange}

                    />

                    <button
                        className="add-task"
                        onClick={addTask}
                    >Add</button>
                </div>
                <ol>

                    {filteredTodos.map((task, index) =>
                        <li key={index}>
                            <input
                                id="check"
                                type="checkbox"
                                checked={task.state_task}

                                onChange={() => handleToggle(task.id)}
                            />
                            <span

                                style={{ textDecoration: task.state_task ? 'line-through' : 'none' }}
                                className="text nameTask" id="nameTask">{task.nameTask}</span>
                            <button
                                className="delete-button"
                                id="btn-delete"
                                onClick={() => deleteTask(index)}
                            >Delete</button>

                        </li>

                    )}
                </ol>
                <button
                    id="btn-deleteAll"
                    onClick={deleteCompletedTasks}

                >Delete all</button>





            </div>

        </>
    );

}

export default ToDoList