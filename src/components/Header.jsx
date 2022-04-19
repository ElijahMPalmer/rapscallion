import React from "react";
import Signup from "./Signup";

const Header = () => {
    return (
        <>
        
        <div className="heading">
            <div className="logo-container">
            <div id="rap-logo"><a href="/"><h1>RAPSCALLION</h1></a></div>
            <Signup />
            </div>
            <div className="HeaderLinks"> 
            <div className="left-links">
            <a href="https://www.vacareers.va.gov/">Veteran Careers</a>
            <a href="https://www.governmentjobs.com/">Goverment Jobs</a>
            <a href="https://www.salary.com/">Salary Tools</a>
            <a href="https://www.thebalancecareers.com/career-advice-4161933">Career Advice</a>
            <a href="https://www.resumehelp.com/">Resume Help</a>
            </div>
            <div id="ForEmployers">
            <a href="https://www.collegesimply.com/colleges-near/">Find a School Near me    →</a>
            </div>
            </div>
        </div>
        </>
    )
}
export default Header; 