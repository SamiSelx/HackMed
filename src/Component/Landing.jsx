import { GoArrowUpRight } from "react-icons/go";
import { LuHeartPulse } from "react-icons/lu";
import { FaHandHoldingMedical } from "react-icons/fa";
import {useEffect} from 'react'

export default function Landing(){
    useEffect(()=>{

    })
    return(
        <main>
            <div className="container main">
                <div className="main-content">
                    <h1>
                        Medical Healthcare Tracking
                    </h1>
                    <p>Lorem ipsum dolor sit
                         amet consectetur adipisicing elit. Numquam distinctio eligendi quod, laudantium fugit,
                    </p>
                    <button >GET STARTED <GoArrowUpRight  style={{marginLeft:"5px"}}/></button> {/*Icon Here */}
                </div>
                <div className="image">
                    <img src="./landingImg.png" alt="" />
                    <img className="watch-img" src="./watch.png" alt="" onLoad={(e)=>{e.target.classList.add('animationWatch')}} />
                    <p>Track Your medical Health effectivly</p> {/*absolute */}
                    <p>gain insights into your health data</p>
                    <LuHeartPulse />
                    <FaHandHoldingMedical />
                </div>
            </div>
        </main>
    )
}