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
                <NavLink to='/singNshit' className='navlink'>מדור שירה וחירבון</NavLink>
                <NavLink to='/teacup' className='navlink'>כוס תה</NavLink>
                {/* <NavLink to='/weekly' className='navlink'>מעקב השבוע</NavLink> */}
                {/* <NavLink to='/forum' className='navlink'>פורום השבוע</NavLink> */}
            </nav>
        </div>
    );
}
 
export default Navbar;