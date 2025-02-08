import { useContext } from "react";
import { DBContext } from "../context/SheetParsing";
import "../style/Homoscope.css";

const Homoscope = () => {

    const {homoscope} = useContext(DBContext)       

    return (
        <div className="homoscope">
            <div className="homoscopeWrapper">
                {homoscope && homoscope.map((item, index) => {
                    return (
                        <div key={index} className="homoscopeItem">
                            <p className="homoscopeTitle">{item.horoscope}</p>
                            {/* <p>{item.content}</p> */}
                        </div>
                    )
                })}
            </div>
        </div>
    );
}
 
export default Homoscope;