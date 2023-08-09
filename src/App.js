import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { MenuTop } from './components/Menu-Top'
import { Mascotas } from './components/Mascotas'
//import {MenuLeft} from './components/Menu-Left'
import { Home } from './components/Home'
import { InicioSecion } from './components/Inicio-Secion';
import { Registro } from './components/Registro';
import { useDispatch, useSelector } from 'react-redux';
import { Contacto } from './components/Contacto'
import { useAuth0 } from "@auth0/auth0-react"
import { useEffect } from 'react'
import { logeo } from './action'

function App() {
  const { isAuthenticated, user,logout } = useAuth0()
  const use = useSelector((state) => state.users)
  const error = useSelector((state) => state.error)
  const dispatch = useDispatch()
  useEffect(() => {
      if (isAuthenticated && user && user.email && use && !use.email) {
        if(error!=""){
          alert(error)
          logout()

        }else
        {
          dispatch(logeo(user.email))
        }
      }
    
  }, [use, isAuthenticated, dispatch, user])
  
  const thisUser = useSelector((state) => state.users)
  let routes;
  switch (thisUser.perfil) {
    case 'admin':
      routes = (
        <>
        <MenuTop />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/users" element={<h1>Usuarios</h1>} />
          <Route path="/logbooks" element={<h1>Bitagora</h1>} />
          <Route path="/usererror" element={<h1>Error de usuario</h1>} />
          <Route path="/userpermissions" element={<h1>Permisio de usuario</h1>} />
          <Route path="/backup" element={<h1>Backup</h1>} />
          <Route path="/iniciosecion" element={<InicioSecion />} />
          <Route path="/crearcuenta" element={<Registro />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        </>
      )
      break;
      case "cliente":
        routes = (
          <>
          <MenuTop />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/Pets" element={<h1>Mascotas</h1>} />
            <Route path="/Diary" element={<h1>Agenda</h1>} />
            <Route path="/medicalshift" element={<h1>Turnos medicos</h1>} />
            <Route path="/Payments" element={<h1>Pagos</h1>} />
            <Route path="/Clinichistory" element={<h1>Historia clinica</h1>} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
          </>
        )
        
        break; 
    case "profecional":
      routes = (
      <>
      <MenuTop />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/diaryers" element={<h1>Agenda</h1>} />
        <Route path="/veterinary" element={<h1>Veterinarias</h1>} />
        <Route path="/pets" element={<h1>Mascotas</h1>} />
        <Route path="/paymentreports" element={<h1>Reportes de pagos</h1>} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      </>)
    break;
    case "veterinaria":
      routes = (
        <>
        <MenuTop />
      <Routes>  
        <Route exact path="/" element={<Home />} />
        <Route path="/professionals" element={<h1>Profecionales</h1>} />
        <Route path="/collections" element={<h1>Cobros</h1>} />
        <Route path="/pets" element={<h1>Mascotas</h1>} />
        <Route path="/payments" element={<h1>Pagos</h1>} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
       </>
      )
      break;
    default:
      routes = (<Routes>
        <Route exact path="/" element={<><MenuTop /> <Home /></>} />
        <Route path="/bunkbeds" element={<><MenuTop /> <h1>Literas</h1></>} />
        <Route path="/dogfood" element={<><MenuTop /> <h1>Comida de perro</h1></>} />
        <Route path="/catfood" element={<><MenuTop /><h1>Comida de gato</h1></>} />
        <Route path="/conveyors" element={<><MenuTop /> <h1>Trasportadoras</h1></>} />
        <Route path="/toys" element={<><MenuTop /><h1>Jugetes</h1></>} />
        <Route path="/hairsalon" element={<><MenuTop /> <h1>Peluqueria</h1></>} />
        <Route path="/vaccines" element={<><MenuTop /> <h1>Vacunas</h1></>} />
        <Route path="/iniciosecion" element={<InicioSecion />} />
        <Route path="/crearcuenta" element={<Registro />} />
        <Route path="*" element={<Navigate to="/"  />} />
      </Routes>)
      break;
  }
  return (
    <BrowserRouter >
      <Contacto />
      {routes}
    </BrowserRouter>
  );
}

export default App;
