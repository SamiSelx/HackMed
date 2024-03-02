import { Link } from "react-router-dom"
import Navigator from "./Navigator"
import { useContext } from "react"
import { UserContexts } from "../contexts/UserContexts"

//Check user if islogged or not by their token on localStorage

export default function Header(){
    const user = useContext(UserContexts)
    return(
        <header>
            <nav className="container">
                <Link to="/" style={{textDecoration:"none", color:"#2F2F2F"}}><h2 className="logo">MOURAFIK.</h2></Link>
                <Navigator />
                <div>
                    {user.isLogged ? null : <Link to={'/login'}><button className="btn-login ">logIn</button></Link>}
                    <Link to={!user.isLogged ? '/registre' : '/'}><button className="btn-join btn-primary">{user.isLogged ? "LogOut" : "Join Us"}</button></Link>
                </div>
            </nav>
        </header>
    )
}