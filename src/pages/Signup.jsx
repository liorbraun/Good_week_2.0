import "../style/Signup.css";

const Signup = () => {
    return (
        <div className="signup">
            <div className="formWrapper">
                <iframe 
                    src="https://docs.google.com/forms/d/e/1FAIpQLSdVLgCgiYVLdWsiRpyfyPYh-F169Jq0w9IyipNXMttapHqdAA/viewform?embedded=true"
                    /* height="750" */
                    frameborder="0"
                    marginheight="0" 
                    marginwidth="0"
                    z-index="999999">
                        Loading…
                </iframe>
            </div>
        </div>
    );
}
 
export default Signup;