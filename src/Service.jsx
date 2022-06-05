import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Card from "./Card";
import Sdata from "./Sdata";

const Service = () =>{
    return(
        <>
            <div className="container">
                <div className="row">
                <center><h2>Our Services</h2></center>
                    {Sdata.map((val,index)=>{
                        return <Card
                            key={index}
                            imgsrc={val.imgsrc}
                            cardtitle= {val.cardtitle}
                            cardtext= {val.cardtext}
                        />
                    })}
                </div>
            </div>
        </>
    );
}


export default Service;