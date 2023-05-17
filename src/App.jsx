import { useEffect, useState } from 'react';
import './App.css'
import { TaskCreator } from './components/TaskCreator';
import { TaskTable } from './components/TaskTable';
import { VisibilityControl } from './components/VisibilityControl';
import { Container } from './components/container';

function App() {

    const [tasksItems, setTasksItems] = useState(JSON.parse(localStorage.getItem('tasks')) ?? []);

    const [showCompleted, setShowCompleted] = useState(false);


    const createTask = (taskName) => {
        //Comprobamos que la tarea no exista
        const iguales = tasksItems.some(task => task.name === taskName);

        if (!iguales) {
            setTasksItems([...tasksItems, { name: taskName, done: false }])
        }

    }

    const toggleTask = (taskState) => {
        const updateTasks = tasksItems.map(task => taskState.name === task.name ? { ...task, done: !task.done } : task)

        setTasksItems(updateTasks);
    }

    const clearTask = () => {
        const updateTask = tasksItems.filter(task => !task.done);

        setTasksItems(updateTask);
        setShowCompleted(false);
    }


    //Guardar tareas en el localhost
    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasksItems) ?? [])
    }, [tasksItems])

    return (
        <main className='bg-dark vh-100 text-white'>

            <Container>
                <TaskCreator
                    createTask={createTask}
                />

                <TaskTable
                    tasksItems={tasksItems}
                    toggleTask={toggleTask}
                />

                <VisibilityControl
                    setShowCompleted={setShowCompleted}
                    showCompleted={showCompleted}
                    clearTask={clearTask}
                />

                {
                    showCompleted &&
                    <TaskTable
                        tasksItems={tasksItems}
                        toggleTask={toggleTask}
                        showCompleted={showCompleted}
                    />
                }
            </Container>

        </main>
    )
}

export default App
