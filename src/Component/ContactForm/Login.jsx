import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import axios from "axios"

export default function Login(){
    const [login,setLogin] = useState({email:"",password:""})

    function handleSubmit(e){
        e.preventDefault()
        axios.post("http://192.168.137.143:3139/api/user/login",
            login
        ).then(res => {
            console.log(res.data)
            localStorage.setItem('token',res.data.token)
        }).catch((e)=>console.log(e))
    }
    return(
        <div className="login">
           <div>
           <h1>Welcome To MOURAFIK</h1>
            <form action="" onSubmit={(e)=>{handleSubmit(e)}}>
                <div>
                    <label>Email </label> <br></br><input type="text" value={login.email} placeholder="Your Email" onChange={(e)=>setLogin({...login,email:e.target.value})}/>
                </div>
                <div>
                    <label>Password </label><br></br> <input type="password" value={login.password} placeholder="Your Password" onChange={(e)=>setLogin({...login,password:e.target.value})}/>
                </div>
                <button type="submit" className="sign-btn">Sign in</button>
            </form>
            <p>Need an account? <button>Create one</button></p>
            <div className="or"></div>
            <button className="sign-google-btn">Sign in with Google <FcGoogle /></button>{/*Icon */}
           </div>
        </div>
    )
}