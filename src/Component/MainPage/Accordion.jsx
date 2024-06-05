import { useState } from "react"

export default function Accordion({open,title,children}){
    const [isOpen,setIsOpen] = useState(open)
    console.log(title)
    return(
        <>
        {title ? <h2 style={{padding:"10px 0"}}>{title}</h2> : null}
        <div className="accordion">
                        <span onClick={()=>setIsOpen(!isOpen)} ></span>
                        <div onClick={()=>setIsOpen(!isOpen)} style={{cursor:"pointer"}}></div>
                        <ul style={{height:isOpen ? "100px": "0px",overflow:"hidden",transition:"0.7s"}}>
                            {children}
                        </ul>
        </div>
        </>
    )
}