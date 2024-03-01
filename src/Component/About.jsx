import { useState } from "react"

export default function About(){
    const [isOpen,setIsOpen] = useState(false)
    return(
        <div className="about">
            <div className="container">
                <h2 className="title">ABOUT MOURAFIK.</h2>
                <p>Monitor and gain insights into your health data to improve your overall well-being.</p>
                
            </div>
        </div>
    )
}