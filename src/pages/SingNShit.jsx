import { useContext } from "react";
import "../style/SingNShit.css"
import { DBContext } from "../context/SheetParsing";

const SingNShit = () => {

    const { singNShit } = useContext(DBContext)

    return (
        <div className="singnshit">
            <div className="singNshitWrapper">
                {singNShit && singNShit.map((item, index) => {
                    return (
                        <div key={index} className="singnshitItem">
                            <p className="singTitle">{item.sing} מאת - {item.creator}</p>
                            <p className="singContent">
                                {item.content.split("\n").map((line, index) => {
                                    return (
                                        <span key={index}>
                                            {line}
                                            <br/>
                                        </span>
                                    )
                                })}
                            </p>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}
 
export default SingNShit;