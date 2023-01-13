import React, { useState } from "react"
import Login from './Login';
import logo from './logo.svg';
import Signup from "./Signup";


const Form =()=>{
    
    const [text ,  setText]= useState("Login");

    const handleTab = (e) =>{
        const str= e.target.innerText;
        setText(str);
        console.log(text)
    }   

    return (
            <>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 text-center">
                                <div className="imgDiv">
                                    <img src={logo} className="App-logo" alt="logo" />
                                    <p>SOME RANDOM TEXT, SOME RANDOM TEXT,SOME RANDOM TEXT,SOME RANDOM TEXT</p>
                                </div>
                                <div className="log-sign-btn d-flex mt-5">
                                    <button type="button" className={text== "Login"? "bttn px-5 py-2 activ" : "bttn px-5 py-2 " } onClick={(e)=> handleTab(e)}>Login</button>
                                    <button type="button" className={text== "Signup"? "bttn px-5 py-2 activ" : "bttn px-5 py-2 " } onClick={(e)=> handleTab(e)}>Signup</button>
                                </div>
                                <div className="form">
                                    {
                                        text == "Login" ? <Login/> : <Signup/>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
            </> 
    )                
}

export default Form;