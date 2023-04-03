import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Home'
import List from './List'

import Hotel from './Hotel'
import NavBar from '../src/NavBar'

function App() {
  

  return (
    
   <BrowserRouter>
   
  <Routes>
    
    <Route path='/' element={<Home/>}/>
    <Route path='/hotels' element={<List/>}/>
    <Route path='/hotel/:id' element={<Hotel/>}/>
  </Routes>
    </BrowserRouter>
  )
}

export default App
