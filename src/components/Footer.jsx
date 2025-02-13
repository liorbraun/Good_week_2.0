import "../style/Footer.css"

import { DBContext } from "../context/SheetParsing";
import { useContext } from "react";

const Footer = () => {

    const {gossip} = useContext(DBContext)

    return (
        <div className="footerWrapper">
            <div className="credit">
                <p>© 2025 כל הזכויות שמורות</p>
                <a href="https://buymeacoffee.com/lordbraun" target="_blank" rel="noopener noreferrer">קנו לי כוס תה</a>
            </div>
            <div className="gossipScroll">
                <ul>
                    {gossip && gossip.map((item, i) => (
                        <li className="gossipItem" key={i}>
                            <p>{item.content}</p>
                            <p>○</p>
                        </li>
                    ))}
                </ul>
                <ul>
                    {gossip && gossip.map((item, i) => (
                        <li className="gossipItem" key={i}>
                            <p>{item.content}</p>
                            <p>○</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
 
export default Footer;