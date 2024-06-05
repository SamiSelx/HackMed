import UserContact from "./UserContact";


export default function Chats(){

    const users = [
        {id:1,fullName:"sami Yasser",status:"active"},
        {id:2,fullName:"sami dds",status:"distract"},
        {id:3,fullName:"sami dd",status:"do not distrube"}
    ]

    const usersComponant = users.map((us)=>{
        return <div className="user-contact" key={us.id}> <UserContact  user={us}/></div>
    })

    return(
        <div className="chat-patient container">
            <div className="contacts">
                <div className="search-contact">
                    <label htmlFor="search">{/*ICON */}</label>
                    <input id="search" type="search" placeholder="Contacts"/>
                </div>
                <ul className="type-contact">
                        <li className="active">All <span>24</span></li>
                        <li>Doctors <span>15</span></li>
                        <li>Member <span>9</span></li>
                </ul>
                <div className="box-contact">
                    {usersComponant}
                </div>
            </div>

            <div className="chats">
                <div className="chat-head">
                    {/*Icon flesh*/}
                    <div className="image-contact"><img src="" alt="" /></div>
                    <div className="user-info">
                        <p>Taylor smith</p>
                        <span>Active Now</span>
                    </div>
                </div>
            </div>
        </div>
    )
}