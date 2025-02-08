import '../style/Navbar.css'

const Navbar = ({ navigate }) => {
    return ( 
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
    );
}
 
export default Navbar;