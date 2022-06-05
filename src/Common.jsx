import React from "react";
import { NavLink } from "react-router-dom";

const Common = (props) =>{
    return (
        <>
            <div className="container-fluid" style={{background:"antiquewhite", height:"92vh"}}>
                <div className="row">
                    <div className="col-md-10 col-10 mx-auto">
                        <div className="row">
                            <div className="col-md-6 pt-5 ">
                                <h1>{props.title}</h1>
                                <h3>{props.description}</h3>
                                <NavLink to={props.visitlink}><button className="btn btn-primary">{props.buttonName}</button></NavLink>
                            </div>
                            <div className="col-md-6 mt-5">
                                <img src={props.imgsrc} className="img-fluid" alt="sources"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Common;