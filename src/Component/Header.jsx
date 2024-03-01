import { Link } from "react-router-dom"

export default function Header(){
    return(
        <header>
            <nav className="container">
                <Link to="/" style={{textDecoration:"none", color:"#2F2F2F"}}><h2 className="logo">MOURAFIK.</h2></Link>
                <ul className="navigation">
                    <li><a href="#">Services</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Pricing</a></li>
                </ul>
                <div>
                    <button className="btn-login ">LogIn</button>
                    <button className="btn-join btn-primary">Join Us</button>
                </div>
            </nav>
        </header>
    )
}