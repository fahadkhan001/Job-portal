import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import PrivateRoutes from './components/PrivateRoutes'
import Profile from './pages/Profile'
import Header from './components/Header'


function App() {
  

  return (
    <BrowserRouter>
    < Header/>
    <Routes>
    <Route path='/' element= {<Home />} />
    
    <Route path='/sign-in' element={<Login />} />
    <Route path='/sign-up' element={<Signup />} />
    <Route element={<PrivateRoutes />} >
    <Route path='/profile' element={<Profile />} />
  
    </Route>

    </Routes>
    </BrowserRouter>
  )
}

export default App
