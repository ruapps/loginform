import React from "react"


const Login = ()=>{
    
    return (
            <>
               <form action="" className="d-flex flex-column ">
                    <input type="email" className="mt-5" placeholder="Email Address"/>
                    <input type="password" className="mt-3" placeholder="Password"/>
                    <button type="submit" className="Loginbtn mt-4">LOGIN</button>
                    <a href="#" className="align-self-end me-4 f_pas my-3">Forgot Password?</a>
                    <div className="social mt-1">
                            <p>or login with</p>
                            <div className="soc_img d-flex align-items-center justify-content-around px-5  my-4">
                                <a href="#"><img src="./asset/google.png" alt=""  /></a>
                                <a href="#"><img src="./asset/fb.png" alt=""  /></a>
                                <a href="#"><img src="./asset/twitter.png" alt=""  /></a>
                            </div>
                            <p >Don’t have an account? <a href="#" target="_self">Create new now!</a></p>
                    </div>
               </form>
            </> 
    )                
}

export default Login;