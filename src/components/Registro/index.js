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
    const {loginWithPopup,user,isAuthenticated}=useAuth0()
    const navigate = useNavigate()
    const dispatch=useDispatch()
    const thisUser=useSelector((state)=>state.users)
    const [Tipo, setTipo]=useState({
        tipo:"",
        email:"",
        foto:""
    })
    const [abilitado, setabilitado]=useState(true)
    const settipo=(e)=>{
        setTipo({...Tipo,tipo:e.target.name})
        setabilitado(false)
    }
    
    if(thisUser.email){
        navigate('/')
    }
    useEffect(()=>{
        if(isAuthenticated&&!Tipo.email)
        {
            setTipo({...Tipo,email:user.email,foto:user.picture})
        }
        if(Tipo.email&&Tipo.tipo&&Tipo.foto){
            dispatch(registro(Tipo))
        }
       
    },[Tipo,isAuthenticated,user])
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
                <button className={style.botonCrearcuenta} disabled={abilitado} onClick={createcuenta}>Crea tu cuenta</button>
            </div>
        </div>
    )
}