import { FaTasks } from "react-icons/fa"
import { FaHeart, FaNoteSticky, FaPlus } from "react-icons/fa6"
import { useNavigate } from "react-router-dom"

const QuickLink = () => {
    const navigate = useNavigate()

 return(
    <>
        <p style={{marginTop: '2rem', fontWeight: 'bold'}}>Quick Actions</p>
    <div className="card-container">
        <div className="card add" style={{background: 'hsl(0, 100%, 97%)'}} onClick={() => {navigate('/new-note')}}>
            <div className="content" style={{color: '#ff0000ff'}}>
                <FaNoteSticky size={20} />
                <div style={{marginTop: '.5rem'}}>New Note</div>
            </div>
        </div>
        <div className="card add" style={{background: 'hsl(197, 71%, 96%)', border: '1px solid hsl(197, 71%, 94%)'}} onClick={() => navigate('/task')}>
            <div className="content" style={{color: '#4da6ff'}}>
                <FaTasks size={20} />
                <div style={{marginTop: '.5rem'}}>New Tasks</div>
            </div>
        </div>
        <div className="card add" onClick={(e) => navigate('/favorite')} style={{background: 'hsl(75, 82%, 93%)', border: '1px solid hsl(75, 82%, 73%)'}}>
            <div className="content">
                <FaHeart size={20} />
                <div style={{marginTop: '.5rem'}}>New Favorite</div>
            </div>
        </div>
    </div>
    </>
 )
}

export default QuickLink