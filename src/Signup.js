import React from "react"



const Signup = ()=>{
    
    return (
            <>
               <form action="" className="d-flex flex-column ">
                    
                    <input type="text" className="mt-5" placeholder="Full Name"/>
                    <input type="email" className="mt-3" placeholder="Email Address"/>
                    <input type="password" className="mt-3" placeholder="Password"/>
                    <button type="submit" className="Loginbtn mt-4">Signup</button>
                    <div className="social my-4">
                            <p>or login with</p>
                            <div className="soc_img d-flex align-items-center justify-content-around px-5 ">
                                <a href="#"><img src="/loginform/asset/google.png" alt=""  /></a>
                                <a href="#"><img src="/loginform/asset/fb.png" alt=""  /></a>
                                <a href="#"><img src="/loginform/asset/twitter.png" alt=""  /></a>
                            </div>
                    </div>
               </form>
            </> 
    )                
}

export default Signup;