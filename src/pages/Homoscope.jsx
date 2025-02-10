import { useContext, useState } from "react";
import { DBContext } from "../context/SheetParsing";
import "../style/Homoscope.css";

const Homoscope = () => {
    const [ displayContent, setDisplayContent ] = useState();
    const {homoscope} = useContext(DBContext)       
    
    const onClickHandler = (content) => { 
        return () => {
            setDisplayContent(content);
            console.log(homoscope[0].content);
        }
    }
    
    return (
        <div className="homoscope">
            <div className="homoscopeWrapper">
                <div className="homoscopeitems">
                    {homoscope && homoscope.map((item, index) => {
                        return (
                            <div key={index} className={`homoscopeItem ${(index === displayContent) ? "selected" : ""}`} onClick= { onClickHandler(index) } >
                                <p className="homoscopeTitle">{item.horoscope}</p>
                            </div>
                        )    
                    })}
                </div>
                <div className="homoscopecontent">
                 { displayContent !== undefined && <p>{homoscope[displayContent].content}</p> }
                </div>
            </div>
        </div>
    );
}
 
export default Homoscope;