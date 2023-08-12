import { useNavigate } from 'react-router-dom'
import logo from '../../img/logo.jpg'
import cliente from '../../img/logo-cliente.png'
import profecional from '../../img/logo-profecional.png'
import veterinaria from '../../img/logo-veterinaria.png'
import { useEffect, useState } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { useDispatch, useSelector } from 'react-redux'
import { registro } from '../../action'
import { BotonRegistro } from '../reutilisables/botonRegistro'
import style from './Registro.module.css'

export const Registro = () => {
    //propiedades de aoth0
    const {loginWithPopup,user,isAuthenticated}=useAuth0()
    const navigate = useNavigate()
    const dispatch=useDispatch()
    //datos de usuario
    const thisUser=useSelector((state)=>state.users)
    //estado para registrar  el usuario
    const [Tipo, setTipo]=useState({
        tipo:"",
        email:""
    })
    //estado para habilitar el boton de crear la cuenta
    const [habilitado, sethhabilitado]=useState(true)
    //funcion que guerda en el estado el perfil "tipo" en el estado 
    //y habilita el boton de crear cuenta
    const settipo=(e)=>{
        let tipoUsuario;
        
            if(e.target.name==='cliente')tipoUsuario=1
            if(e.target.name==='profecional')tipoUsuario=2
            if(e.target.name==='veterinaria')tipoUsuario=3
        
        setTipo({...Tipo,tipo:tipoUsuario})
        sethhabilitado(false)
    }
    //consultamos si en el estado de redux ya tenemos la variable de email
    //si es asi nos rediderciona al home
    if(thisUser.msg){
        navigate('/iniciosecion')
    }
    //validacion luego de que cargue la pagina 
    //y cuando hay actualisacion de alguna parte del arbol espesificada 
    useEffect(()=>{
        //validamos si esta logeado y el estado del objeto a crear usuario no tiene mail
        //en ese caso cargamos el objeto a crear 
        if(isAuthenticated&&!Tipo.email)
        {
            setTipo({...Tipo,email:user.email})
        }
        //en caso de que el objeto este cargado 
        //despachamos la acion de registro
        if(Tipo.email&&Tipo.tipo){
            dispatch(registro(Tipo))
        }
       
    },[Tipo,isAuthenticated,user])
    //funcion   para ejecutar el registro en auth0
    //validando que el perfil "tipo" esta previamente seleccionado
    const createcuenta=()=>{
        if(Tipo.tipo){
            loginWithPopup()
        }
    }
    return (
        <div className={style.contenedor}>
            <button  className={style.botonCierre}  onClick={() => { navigate("/iniciosecion") }}>X</button>
            <div className={style.contenedorInfo}>
                <img src={logo} alt="img" />
                <h4>Estás a un paso!</h4>
                <h4>Crea una cuenta nueva para poder iniciar tu consulta</h4>
                <p>Seleciona una opcion</p>
                <div>
                <BotonRegistro
                name="cliente"
                tipo={Tipo.tipo}
                fuction={settipo}
                img={cliente}
                />
                <BotonRegistro
                name="profecional"
                tipo={Tipo.tipo}
                fuction={settipo}
                img={profecional}
                />
                <BotonRegistro
                name="veterinaria"
                tipo={Tipo.tipo}
                fuction={settipo}
                img={veterinaria}
                />
                </div>
                <button className={style.botonCrearcuenta} disabled={habilitado} onClick={createcuenta}>Crea tu cuenta</button>
            </div>
        </div>
    )
}