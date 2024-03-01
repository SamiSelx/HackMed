import Main from './Component/Main'
import Header from './Component/Header'
import {Routes, Route} from 'react-router-dom'
import './App.css'


function App() {

  return (
    <>
      <Header /> {/* Outside the route */}
      <Routes>
        <Route path='/' element={<Main />}/>  
        <Route path='*' element={<h4>Error 404 </h4>} />
      </Routes>
    </>
  )
}

export default App
