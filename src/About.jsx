import React from "react";
import Common from "./Common";
import web from './images/b2.jpg';

const About = () =>{
    return(
        <>
            <Common
                title="About Page Title"
                description="About Page Description"
                visitlink="/contact"
                buttonName="About Contact"
                imgsrc={web}
            />
        </>
    );
}


export default About;