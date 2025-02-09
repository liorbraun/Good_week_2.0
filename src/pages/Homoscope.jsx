import { useContext, useState } from "react";
import { DBContext } from "../context/SheetParsing";
import "../style/Homoscope.css";

const Homoscope = () => {
    const [ displayContent, setDisplayContent ] = useState(null);
    const {homoscope} = useContext(DBContext)       
    const onClickHandler = (content) => { 
        return () => {
            setDisplayContent(content);
        }
     } 
    return (
        <div className="homoscope">
            <div className="homoscopeWrapper">
                {homoscope && homoscope.map((item, index) => {
                    return (
                        <div key={index} className="homoscopeItem" onClick= { onClickHandler(item.content) } >
                            <p className="homoscopeTitle">{item.horoscope}</p>
                            
                        </div>
                    )    
                })}
                 { <p>{displayContent}</p> }
            </div>
        </div>
    );
}
 
export default Homoscope;