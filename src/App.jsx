import Main from './Component/Main'
import Header from './Component/MainPage/Header'
import { useEffect, useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import Insights from './Component/Patient/Insights'
import './App.css'
import Services from './Component/ServicesComp/Services'
import { UserContexts } from './contexts/UserContexts'
import Login from './Component/ContactForm/Login'
import Registre from './Component/ContactForm/Registre'
import { RegistreContexts } from './contexts/RegistreContexts'
import ServicesDetails from './Component/ServicesComp/ServicesDetails'
import { cardList } from './contexts/ServicesContexts'
import { ServicesContexts } from './contexts/ServicesContexts'
import axios from 'axios'
import Chats from './Component/ChatsComp/Chats'






function App() {
  const [userInfo,setUserInfo] = useState({fullName: "",email:"",phone:"",type:"patient",birthDate:"",password:""})
  const [registre,setRegistre] = useState({firstName:"",lastName:"",phoneNumber:"",email:"",password:"",type:"",dayBirth:"",monthBirth:"",yearBirth:""})
  useEffect( ()=>{
    axios.get('http://192.168.137.143:3139/api/user/me',{
      headers:{
        'Authorization': window.localStorage.getItem("token")
      }
    }).then((res)=>{
        setUserInfo({...res.data.info,type:res.data.role.type})
    }).catch((e)=>{
    })


  },[])

  return (
    <>
    <ServicesContexts.Provider value={cardList}>
      <UserContexts.Provider value={userInfo}>
        <RegistreContexts.Provider value={{registre,setRegistre}}>
        <Header />
      <Routes>
        <Route path='/' element={window.localStorage.getItem('token') ? <Insights/> : <Main />}/> {/*If the user was signed in then show the user component  and change the Header*/}

        <Route path='/services'>
          <Route index element={<Services/>} />
          <Route path='servicedetails' element={<ServicesDetails/>}/>
        </Route>
        <Route path='/services/:serviceId' element={<ServicesDetails/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/registre' element={<Registre/>} />
        <Route path='/chats' element={userInfo.type ==="patient" ? <Chats/>:<h1>Page not found</h1>} />
        <Route path='*' element={<h4>Error 404 </h4>} />
      </Routes>
        </RegistreContexts.Provider>
      </UserContexts.Provider>
      </ServicesContexts.Provider>
    </>
  )
}

export default App
