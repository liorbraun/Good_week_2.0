import { useContext } from "react";
import "../style/SingNShit.css"
import { DBContext } from "../context/SheetParsing";

const SingNShit = () => {

    const { singNShit } = useContext(DBContext)

    return (
        <div className="singnshit">
            {singNShit && singNShit.map((item, index) => {
                return (
                    <div key={index} className="singnshitItem">
                        <p>{item.sing}</p>
                        <p>{item.content}</p>
                    </div>
                )
            })}
        </div>
    );
}
 
export default SingNShit;