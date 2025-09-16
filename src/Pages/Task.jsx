import { FcSerialTasks } from "react-icons/fc"
import { useState } from "react"
import { BiTaskX } from "react-icons/bi"
import { RiTaskFill } from "react-icons/ri"
import { MdTaskAlt } from "react-icons/md"
import { FaPlus } from "react-icons/fa6"

export default function Task() {
    const [empty, setEmpty] = useState(true)
    const [modal, setModal] = useState(false)

    const newTask = () => {
        setEmpty(!empty)
        setModal(!modal)
    }

    return(
        <>
            <section>
                <div style={{fontWeight: 'bold', fontSize: '2rem'}}>Tasks</div>  
                {
                    empty &&
                    <div className="noNote">
                        {/* <MdTaskAlt size={50} /> */}
                        {/* <BiTaskX size={50} /> */}
                        <RiTaskFill size={50} />
                        <div>You have no Task yet</div>
                        <button onClick={newTask} className="restore"> <FaPlus /> Create Task</button>
                    </div>
                }
                {
                    modal && 
                        <div className="modal-overlay">
                            <div className="modal">
                                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                                    <div style={{fontWeight: 'bold', fontSize: '1.2rem'}}>Create Task</div>
                                    <span className="cancel" style={{fontSize: '1.2rem', fontWeight: 'bold'}}>x</span>
                                </div>
                            </div>
                        </div>
                }


            </section>
        </>
    )
}