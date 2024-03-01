

export default function CardServices({title,description,icon}){
    return(
        <div className="service-card">
            <h3>{title}</h3>
            <p>{description}</p>
            {/* <button className="btn-primary">LEARN MORE</button> */}
            <button className="learn-btn">LEARN MORE</button>
        </div>
    )
}