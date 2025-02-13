import { useContext } from "react";
import "../style/About.css"
import { DBContext } from "../context/SheetParsing";

const About = () => {

    const {about} = useContext(DBContext)
    return (
        <div className="about">
            <div className="aboutWrapper">
                {about && about.map((item, index) => {
                    return (
                        <div key={index} className="aboutItem">
                            <p>{item.about}</p>
                            <p>{item.content}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}
 
export default About;