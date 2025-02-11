import "../style/404.css"

const Bad = () => {
    return (
        <div className="bad">
            <p className="msg404">404</p>
            <p className="msg">הלו גבר\ת</p>
            <img src={require('../assets/dog.jpg')} alt="" />
            <p className="msg">מקום לא נכון...</p>
        </div>
    );
}
 
export default Bad;