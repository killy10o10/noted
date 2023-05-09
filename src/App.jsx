import { Route, Routes } from 'react-router-dom'
import './assets/styles/main.scss'
import Splash from './pages/Splash'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Todos from './pages/Todos'
import ShowTodo from './pages/ShowTodo'
import Layout from './components/Layout'

function App() {
 

  return (
    <>
       <Routes>
        <Route element={<Layout />}>
        <Route path='/todos' element={<Todos />} />
        <Route path='/todo-list' element={<ShowTodo />} />
        </Route>
        <Route path='/' element={<Splash />} />
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/sign-up' element={<SignUp />} />
       </Routes> 
    </>
  )
}

export default App
