import { MdOutlineHealthAndSafety } from "react-icons/md";
import CardServices from "./CardServices";
import { useContext } from "react";
import { UserContexts } from "../contexts/UserContexts";

const desc = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati iste voluptates molestias" // temperory

export default function Services(){
    const user = useContext(UserContexts)
    const styleService = {display:"flex",justifyContent:"center",alignItems:"center",height:"90vh"}
    return (
        <div className="services" id="services" style={user.isLogged ? styleService : null }>
            <div className="container">
                <h2 className="title">SERVICES</h2>
                <div className="services-boxes">
                    <CardServices title={'Track your medical health'} description={desc}/>
                    <CardServices title={'Chat With Your Doctor'} description={desc} icon={<MdOutlineHealthAndSafety />} />
                    <CardServices title={'Chat With Your Doctor'} description={desc} icon={<MdOutlineHealthAndSafety />} />
                </div>
            </div>
        </div>
    )
    }