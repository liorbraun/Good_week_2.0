import { NavLink, useNavigate } from 'react-router-dom';
import '../style/Navbar.css'

const Navbar = () => {

    const navigate = useNavigate();

    return ( 
        <div className="nav">
            <nav className="buttonWrapper" >
                <NavLink to='/' className='navlink'>ברכה שבועית</NavLink>
                <NavLink to='/homoscope' className='navlink'>עומוסקופ</NavLink>
                <NavLink to='/gossip' className='navlink'>רכילות</NavLink>
                <NavLink to='/about' className='navlink'>אודות</NavLink>
                <NavLink to='/register' className='navlink'>הרשמה לשירות</NavLink>
                <NavLink to='/singNshit' className='navlink'>מדור שירה וחיברון</NavLink>
                <NavLink to='/teacup' className='navlink'>כוס תה</NavLink>
                {/* <NavLink to='/weekly' className='navlink'>מעקב השבוע</NavLink> */}
                {/* <NavLink to='/forum' className='navlink'>פורום השבוע</NavLink> */}
            </nav>
        </div>
    );
}
 
export default Navbar;

/* 
<div className="nav">
            <div className="buttonWrapper" >
                <div className='navlink' onClick={() => navigate('/')}>ברכה שבועית</div>
                <div className='navlink' onClick={() => navigate('/homoscope')}>עומוסקופ</div>
                <div className='navlink' onClick={() => navigate('/gossip')}>רכילות</div>
                <div className='navlink' onClick={() => navigate('/about')}>אודות</div>
                <div className='navlink' onClick={() => navigate('/register')}>הרשמה לשירות</div>
                <div className='navlink' onClick={() => navigate('/singNshit')}>מדור שירה וחיברון</div>
                <div className='navlink' onClick={() => navigate('/teacup')}>כוס תה</div>
                <div className='navlink' onClick={() => navigate('/weekly')}>מעקב השבוע</div>
                <div className='navlink' onClick={() => navigate('/forum')}>פורום השבוע</div>
            </div>
        </div>
*/