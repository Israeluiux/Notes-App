import { useState } from "react"
import { FaTrash } from "react-icons/fa6"
import { MdCheckBox, MdCheckBoxOutlineBlank } from "react-icons/md"


const TaskCard = ({ task, refresh, setRefresh }) => {
    const [checked, setChecked] = useState(task.checked)
    
    const handleCheck = async () => {
        const check = !checked
        setChecked(check)
        try {
            const response = await fetch(`http://localhost:5000/tasks/${task.id}`,{
                method: 'PATCH',
                body: JSON.stringify({checked: check})
            })
            const data = await response.json()
            setRefresh(!refresh)
        } catch (error) {
            console.error(error)
        }
    }

    const handleDelete = async () => {
        try {
            const response = await fetch(`http://localhost:5000/tasks/${task.id}`,{
                method: 'DELETE',
            })
            setRefresh(!refresh)
        } catch (error) {
            console.error(error)
        }
    }

    return(
        <>
            {/* head */}
            <div className="single-task">
                <label style={{display: 'flex', justifyContent: 'space-between'}}>
                    <div style={{display: 'flex', gap: '.8rem'}} onClick={handleCheck}>
                        {checked ? <MdCheckBox size={24} />  : <MdCheckBoxOutlineBlank size={24} style={{color: '#878787ff'}} /> }
                        <div className={checked ? 'checked' : ''}>{task.name}</div>
                    </div>
                    <FaTrash onClick={handleDelete} style={{color: 'red', cursor: 'pointer'}} />
                </label>
            </div>
        </>
    )
}

export default TaskCard