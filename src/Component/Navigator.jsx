import { Link } from "react-router-dom"
import { useState,useContext } from "react"
import { UserContexts } from "../contexts/UserContexts"


export default function Navigator(){
    const [path,setPath] = useState(window.location.pathname)
    const user = useContext(UserContexts)

    if(!user.isLogged){
        return(
            <ul className="navigation">
                <li><a href="#services">Services</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#pricing">Pricing</a></li>
            </ul>
        )
    }else if(user.type === "patient") {
        return(
            <ul className="navigation">
                <Link to="" onClick={()=>{setPath("/")}}><li className={path == "/" || path == "" ? "active" : ""}>Insights</li></Link>
                <Link to='chats' onClick={()=>{setPath("chats")}}><li className={path == "chats" ? "active" : ""}>Chats</li></Link>
                <Link to="/services" onClick={()=>{setPath("services")}}><li className={path == "services" ? "active" : ""}> Services</li></Link>
            </ul>
        )
    }else{
        return(
            <ul className="navigation">
                <li className={path == "/" || path == "" ? "active" : ""}><a href="#">Insights</a></li>
                <li className={path == "services" ? "active" : ""}><a href="#">Services</a></li>
                <li className={path == "profile" ? "active" : ""}><a href="#">Profile</a></li>
            </ul>
        )
    }
}