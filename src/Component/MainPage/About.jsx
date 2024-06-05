import Accordion from "./Accordion"

export default function About(){
    return(
        <div className="about" id="about">
            <div className="container">
                <h2 className="title">ABOUT MOURAFIK.</h2>
                <p>Monitor and gain insights into your health data to improve your overall well-being.</p>
                <div className="about-content">
                    <Accordion open={true}>
                            <li>
                                <h3>WHAT IS MOURAFIK ?</h3>
                                <p style={{lineHeight:"1.5"}}>Monitor and gain insights into your health data to improve your overall well-being </p>
                            </li>
                            <li>
                                <h3>OUR GOALS </h3>
                                <p style={{lineHeight:"1.5"}}>Monitor and gain insights into your health data to improve your overall well-being </p>
                            </li>
                    </Accordion>
                    <Accordion title={"MOURAFIK. Doctor List"}>
                        {/*List Of Doctors */}
                    </Accordion>
                </div>
            </div> 
        </div>
    )
}