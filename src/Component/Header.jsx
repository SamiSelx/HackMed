import { Link } from "react-router-dom"

export default function Header(){
    return(
        <header>
            <nav className="container">
                <Link to="/" style={{textDecoration:"none", color:"#2F2F2F"}}><h2 className="logo">MOURAFIK.</h2></Link>
                <ul className="navigation">
                    <li>Services</li>
                    <li>About</li>
                    <li>Pricing</li>
                </ul>
                <div>
                    <button className="btn-login">LogIn</button>
                    <button className="btn-join">Join Us</button>
                </div>
            </nav>
        </header>
    )
}