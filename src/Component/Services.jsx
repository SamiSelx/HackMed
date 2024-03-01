import { MdOutlineHealthAndSafety } from "react-icons/md";
import CardServices from "./CardServices";

const desc = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati iste voluptates molestias" // temperory

export default function Services(){
    return (
        <div className="services">
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