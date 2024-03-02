import { useState,useContext } from "react"
import { RegistreContexts } from "../../contexts/RegistreContexts"
import CreateAccount from "./CreateAccount"
import DateBirth from "./DateBirth"
import axios from "axios"

export default function Registre(){
    const {registre,setRegistre} = useContext(RegistreContexts)
    const [isNext,setIsNext]= useState(false)
    function handleNext(){
        setIsNext(true)
    }
    function handleSubmitRegistre(e){
        e.preventDefault();
        const dateBirth = new Date(`${registre.dayBirth}/${registre.monthBirth}/${registre.yearBirth}`)
        const fullName = registre.firstName  + registre.lastName;
        axios.post('http://192.168.137.143:3139/api/user/registre',{
            phone : registre.phoneNumber,
            email : registre.email,
            fullName: fullName,
            password: registre.password,
            birthDate: dateBirth,
            type: registre.type
        }).then((res)=>console.log(res.data)).catch((e)=>{console.log(e)})
    }
    return(
        <div className="login">
        <div>
        <h1>{!isNext ? "Create a new account" : "Date of birth"}</h1>
         <form onSubmit={(e)=> handleSubmitRegistre(e)}>
             {!isNext ?  <CreateAccount isNext = {isNext} handleNext={handleNext}/> : <DateBirth/>}
         </form>
         <p>Already have an account? <button>Sign in</button></p>
         <div className="or"></div>
         <button className="sign-google-btn">Sign in with Google </button>{/*Icon */}
        </div>
     </div>   
    )
}