import { useContext } from "react";
import "../style/Gossip.css";
import { DBContext } from "../context/SheetParsing";

const Gossip = () => {

    const {gossip} = useContext(DBContext)

    return (
        <div className="gossip">
            <div className="gossipWrapper">
                {gossip && gossip.map((item, i) => {
                    return (
                        <div key={i} className="gossipItem">
                            <div className="gossipTitle">
                                <p>★</p>
                                {item.gossip}
                                <p>★</p>
                            </div>
                            <div className="gossipContent">
                                {item.content.split("\n").map((line, i) => {
                                    return (
                                        <p key={i}>{line.length>0 ? line : <br/>}</p>
                                    )
                                })}
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}
 
export default Gossip;