import { Route, Routes } from 'react-router-dom'
import './assets/styles/main.scss'
import Splash from './components/Splash'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import Todos from './components/Todos'

function App() {
 

  return (
    <>
       <Routes>
        <Route path='/' element={<Splash />} />
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/todos' element={<Todos />} />
       </Routes> 
    </>
  )
}

export default App
