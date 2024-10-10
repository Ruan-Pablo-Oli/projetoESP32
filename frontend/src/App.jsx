import React from 'react'
import NavBar from './paginas/components/NavBar'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import HomePage from './paginas/components/HomePage'
import { Medidas } from './paginas/components/Medidas'
import Administracao from './paginas/components/Administracao'
import Mensagens from './paginas/components/Mensagens'




function App(){
  return (
    <Router>
      <NavBar></NavBar>
      <Routes>
         <Route path='/' element = {<HomePage></HomePage>}/>
         <Route path='/Medidas' element={<Medidas></Medidas>}></Route>
         <Route path='/Administracao' element={<Administracao></Administracao>}></Route>
         <Route path='/Mensagens' element={<Mensagens></Mensagens>}></Route>

      </Routes>
    </Router>
  )
}

export default App