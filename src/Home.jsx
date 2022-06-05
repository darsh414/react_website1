import React from "react";
import Common from "./Common";
import web from './images/b1.jpg';

const Home = () =>{
    return(
        <>
            <Common
                title="Home Page Title"
                description="Home Page Description"
                visitlink="/contact"
                buttonName="Home Contact"
                imgsrc={web}
            />
        </>
    );
}


export default Home;