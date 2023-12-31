import React from "react"
import logo from '../../img/logo.jpg'
import { useAuth0 } from "@auth0/auth0-react"
import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { logeo } from "../../action"
import style from './IniciasSecion.module.css'

export const InicioSecion = () => {
    //propiedades de auth0 para poder iniciar secion
    const { loginWithPopup, isAuthenticated, user } = useAuth0()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    // variables de usuario 
    const use = useSelector((state) => state.users)

    //validamos si el usuario esta autentificado
    //en caso de que lo este validamos si el estado de redux tiene email
    //si tiene nos rediecciona a el home
    //caso contrario despachamos la accion de logeo
    if (isAuthenticated) {
        console.log(use)
        if (use.email) navigate("/")
        dispatch(logeo(user.email))
    }
    return (
        <div className={style.contenedor} >
            <button className={style.botonCierre} onClick={() => { navigate("/") }}>X</button>
            <div className={style.contenIS}>
                <img src={logo} alt="img" />
                <h4>Estás a un paso!</h4>
                <h4>Inicia secion o crea una cuenta nueva para poder iniciar tu consulta</h4>
            </div>
            <div className={style.contemCC}>
                <button onClick={() => { loginWithPopup({ returnTo: window.location.origin }) }}>Iniciar Sesion</button>
                <p>Todabia no tienes cuenta?</p>
                <a href="crearcuenta">Crea una nueva</a>
            </div>
        </div>
    )
}