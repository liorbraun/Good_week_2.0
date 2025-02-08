import { useContext } from "react";
import "../style/Gossip.css";
import { DBContext } from "../context/SheetParsing";

const Gossip = () => {

    const {gossip} = useContext(DBContext)

    return (
        <div className="gossip">
            {gossip && gossip.map((item, i) => {
                return (
                    <div key={i} className="gossipItem">
                        <div className="gossipTitle">{item.gossip}</div>
                        <div className="gossipContent">{item.content}</div>
                    </div>
                )
            })}
        </div>
    );
}
 
export default Gossip;