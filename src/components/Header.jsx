import React from "react";
import { Stack } from "@mui/material";
import { Button } from "@mui/material";

const Header = () => {
    return (
        <div className="heading">
            <div className="logo-container">
            <div id="rap-logo"><h1>RAPSCALLION</h1></div>
            <div className="UserButtons"> 
                <Stack direction="row" spacing={2}>
                <Button variant="contained" color='secondary'>Sign up</Button>
                <Button variant="outlined">Log in</Button>
                </Stack>
            </div>
            </div>
            <div className="HeaderLinks"> 
            <div className="left-links">
            <a href="https://www.petmd.com/sites/default/files/styles/article_image/public/2657457178_b9907d2e64.jpg?itok=hBsJNuKL">Find Jobs</a>
            <a href="https://www.petmd.com/sites/default/files/styles/article_image/public/2657457178_b9907d2e64.jpg?itok=hBsJNuKL">Salary Tools</a>
            <a href="https://www.petmd.com/sites/default/files/styles/article_image/public/2657457178_b9907d2e64.jpg?itok=hBsJNuKL">Career Advice</a>
            <a href="https://www.petmd.com/sites/default/files/styles/article_image/public/2657457178_b9907d2e64.jpg?itok=hBsJNuKL">For Employers</a>
            <a href="https://www.petmd.com/sites/default/files/styles/article_image/public/2657457178_b9907d2e64.jpg?itok=hBsJNuKL">Upload Resume</a>
            </div>
            <div id="ForEmployers">
            <a href="https://www.petmd.com/sites/default/files/styles/article_image/public/2657457178_b9907d2e64.jpg?itok=hBsJNuKL">For Employers    →</a>
            </div>
            </div>
        </div>
    )
}
export default Header; 