import { FaArrowRight } from "react-icons/fa6";


export default function UserContact({user}){
    return(
        <>
                    <div className="content-contact">
                    <div className="image-contact" ><img src={`./avatar${user.id}.png`} alt="" /></div>
                    <div className="user-info">
                        <p>{user.fullName}</p>
                        <span>Active Now</span>
                    </div>
                    </div>
                    <FaArrowRight/>
                    {/*Icon: align-self:end */}
        </>
    )
}