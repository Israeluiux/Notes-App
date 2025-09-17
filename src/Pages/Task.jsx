import { useEffect, useState } from "react"
import { RiTaskFill } from "react-icons/ri"
import { FaPlus } from "react-icons/fa6"
import TaskCard from "../Components/TaskCard"

export default function Task() {
    const [empty, setEmpty] = useState(false)
    const [task, setTask] = useState([])
    const [name, setName] = useState('')
    const [checked, setChecked] = useState(false)
    const [totalTask, setTotalTask] = useState(0)
    const [completed, setCompleted] = useState(0)
    const [refresh, setRefresh] = useState(false)
    
    const addTask = async () => {
        const taskdata = {
            name,
            checked
        }
        try {
            const response = await fetch('http://localhost:5000/tasks', {
                method: 'POST',
                body: JSON.stringify(taskdata)
            })
            setName('')
            setRefresh(!refresh)
        } catch (error) {
            console.error(error)
        }
    }


    useEffect(() => {
        const fetchdata = async () => {
            try {
                const response = await fetch('http://localhost:5000/tasks')
                const data = await response.json()
                setTask(data)
                setTotalTask(data.length)
                const completedTask = data.filter(task => task.checked === true)
                setCompleted(completedTask.length)
            } catch (error) {
                console.error(error)
            }
        }
        fetchdata()
    }, [refresh])


    return(
        <>
            <section>
                <div style={{fontWeight: 'bold', fontSize: '2rem'}}>Tasks</div>  
                {/* ADD TASK INPUT */}
                <div className="add-task">
                    <input type="text" 
                           placeholder="Add tasks"
                           value={name}
                           onChange={(e) => setName(e.target.value)}
                           />
                    <button onClick={addTask}>Add Task</button>
                </div>

                <div style={{fontSize: '1.5rem', marginTop: '1.2rem'}}>Completed({completed}/{totalTask})</div>
                <hr style={{border: '1px solid hsla(0, 0%, 90%, 1.00)', marginTop: '1rem'}} />
                { task.map((task) => (
                    <TaskCard task={task} key={task.id} refresh={refresh} setRefresh={setRefresh}/>
                    ))
                }
                {
                    empty &&
                    <div className="noNote">
                        {/* <MdTaskAlt size={50} /> */}
                        {/* <BiTaskX size={50} /> */}
                        <RiTaskFill size={50} />
                        <div>You have no Task yet</div>
                        <button onClick={() => setEmpty(!empty)} className="restore"> <FaPlus /> Create Task</button>
                    </div>
                }

            </section>
        </>
    )
}