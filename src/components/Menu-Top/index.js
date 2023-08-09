import React, { useState } from "react"
import logo from '../../img/logo.jpg'
import buscar from '../../img/bus-i.png'
import userimg from '../../img/user-i.jpg'
import car from '../../img/car-i.jpg'
import categorias from '../../img/category-i.jpg'
import categoriasAc from '../../img/simbolo-categoria-a-c.png'
import { useAuth0 } from "@auth0/auth0-react"
import { useSelector } from "react-redux"
import { Categorias } from "../categorias"
import style from './Menu.module.css'
import { useNavigate } from "react-router-dom"

export const MenuTop = () => {
    //propiedades de auth0
    const { logout, isAuthenticated, user } = useAuth0()
    //datos de usuario de redux
    const use = useSelector((state) => state.users)
    //estado para validar abrir el menu de categorias
    const [categoria, setcategotia] = useState(false)
    const navigate =useNavigate()
    return (
        <div className={style.contenedor}>

            <div className={style.contenedorSuperior}>
                <div className="img-logo-menu">
                    <img src={logo} alt="img" />

                </div>
                <div className={style.buscadorMenu}>
                    <img src={buscar} alt="buscar" />
                    <input  placeholder="busca la categoria"/>
                    <span> Todas las categorias</span>
                </div>
                <div className={style.usuarioMenu}>
                    <img className={style.img} src={
                        isAuthenticated ?
                            use.foto
                            :
                            userimg} alt="logo-user" />
                    {isAuthenticated ? <span>{use.email} </span> : <></>}
                    <img src={car} alt="logo-carrito" />
                </div>
            </div>
            <div  className={style.contenedorInferior}>

                <ul
                onClick={() => {
                    categoria ? setcategotia(false) : setcategotia(true)
                }} 
                className={style.contenedorlista} >
                    <li>
                        <div className={style.botonCategoria}>

                        <img src={categorias} alt="category" />
                        <span>Categories</span>
                        <img src={categoriasAc} alt="category" />
                        </div>
                        {categoria ?
                            <Categorias />
                            : <></>}

                    </li>
                </ul>
                <div className={style.contenedorLogeo}>
                    <a onClick={()=>{navigate('/')}}>Home</a>

                    {/* creamos un condicional validando si esta autentificado 
                    para mostrar el boton de logeo o logout  */}
                    {isAuthenticated ?
                        <a onClick={() => { logout() }}>Cerrar Sesion</a> :
                        <a href="/iniciosecion">Iniciar Sesion</a>}
                </div>

            </div>
        </div>
    )
}