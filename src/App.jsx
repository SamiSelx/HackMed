import Main from './Component/Main'
import Header from './Component/Header'
import { useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import Insights from './Component/User/Insights'
import './App.css'
import Services from './Component/Services'
import { UserContexts } from './contexts/UserContexts'
import Login from './Component/ContactForm/Login'
import Registre from './Component/ContactForm/Registre'
import { RegistreContexts } from './contexts/RegistreContexts'

const user = {
  type: "patient",
  isLogged : false,

}
function App() {
  const [registre,setRegistre] = useState({firstName:"",lastName:"",phoneNumber:"",email:"",password:"",type:"",dayBirth:"",monthBirth:"",yearBirth:""})

  return (
    <>
      <UserContexts.Provider value={user}>
        <RegistreContexts.Provider value={{registre,setRegistre}}>
        <Header /> {/* Outside the route */}
      <Routes>
        <Route path='/' element={user.isLogged ? <Insights/> : <Main />}/> {/*If the user was signed in then show the user component  and change the Header*/}
        <Route path='/services' element={<Services/>} />
        {/* <Route path=''/> */}
        <Route path='/login' element={<Login/>}/>
        <Route path='/registre' element={<Registre/>} />
        <Route path='/chats' element={<h4>chats Page</h4>} />
        <Route path='*' element={<h4>Error 404 </h4>} />
      </Routes>
        </RegistreContexts.Provider>
      </UserContexts.Provider>
    </>
  )
}

export default App
