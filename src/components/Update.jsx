import { useContext, useState } from "react";
import "../style/Update.css";
import { DBContext } from "../context/SheetParsing";


const Update = () => {
    
    const [active, setActive] = useState(false);
    const {update} = useContext(DBContext);
    
    return (
        <div className="update">
            <div className="infoIcon">
                <p className="close">!</p>
                <p className="open" onClick={() => {setActive(true)}} >מה חדש באתרינו?</p>
            </div>
            <div className={`infoWindow ${active ? "active" : ""}`} onClick={() => {setActive(false)}}>
                <div className="updatePopup">
                    <h1>כאן תראו את כל העדכונים של האתר ברגע שמר בראון יועיל בטובו לעדכן אותם</h1>
                    {update && update[0].update.split("\n").map((line, index) => {  return <p key={index}>{line}</p> })}

                </div>
            </div>
        </div>
    );
}
 
export default Update;