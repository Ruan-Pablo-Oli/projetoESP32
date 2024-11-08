import React from 'react'
import NavBar from './paginas/components/NavBar'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import HomePage from './paginas/components/HomePage'
import { Medidas } from './paginas/components/Medidas'
import Administracao from './paginas/components/Administracao'
import Mensagens from './paginas/components/Mensagens'
import {Detalhes} from './paginas/components/Detalhes'
import SignupPage from './paginas/components/Autentication/SignupPage'
import LoginPage from './paginas/components/Autentication/loginPage'



function App(){
  return (
    <Router>
      <NavBar></NavBar>
      <Routes>
         <Route path='/' element = {<HomePage></HomePage>}/>
         <Route path='/Medidas' element={<Medidas></Medidas>}></Route>
         <Route path='/Administracao' element={<Administracao></Administracao>}></Route>
         <Route path='/Mensagens' element={<Mensagens></Mensagens>}></Route>
         <Route path='/Medidas/:id' element={<Detalhes></Detalhes>}></Route>
         <Route path='/cadastro' element={<SignupPage></SignupPage>}></Route>
        <Route path='/login' element={<LoginPage></LoginPage>}></Route>


      </Routes>
    </Router>
  )
}

export default App