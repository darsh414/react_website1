import React, { useState } from "react";

const Contact = () =>{
    const [inputs, Getdata]=useState({
        name:"",
        mob:"",
        mail:"",
        message:"",
    });
    
    const Fetchdata = (event) =>{
        const{name,value}= event.target;
        Getdata((preval)=>{
            return{
                 ...preval,
                 [name]:value,
                
            };
        });
        
    };

    const Formsubmit = (e)=>{
        e.preventDefault();
        alert(`Name is ${inputs.name}, mob no is ${inputs.mob}, email is ${inputs.mail}`);
    }

    return(
        <>
            <div className="container">
                <div className="row">
                <center><h2>Contact Us</h2></center>
                    <div className="col-md-4 mx-auto">
                        <form onSubmit={Formsubmit}>
                            <input type="text" placeholder="Enter Name" name="name" value={inputs.name} class="form-control" onChange={Fetchdata}/>
                            <br/>
                            <input type="text" placeholder="Enter Mob" name="mob" value={inputs.mob} class="form-control" onChange={Fetchdata}/>
                            <br/>
                            <input type="text" placeholder="Enter mail" name="mail" value={inputs.mail} class="form-control" onChange={Fetchdata}/>
                            <br/>
                            <textarea className=" form-control" name="message" value={inputs.message} placeholder="Enter Message" row="2" onChange={Fetchdata}/>
                            <br/>
                            <button className="btn btn-success">Submit</button>
                        </form>
                    </div>
                </div>
            </div>

        </>
    );
}


export default Contact;