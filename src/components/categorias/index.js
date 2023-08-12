import React from "react"
import { useAuth0 } from "@auth0/auth0-react"
import { useSelector } from "react-redux"
import { BotonCategorias } from "../reutilisables/botonCategorias"
import style from './Categorias.module.css'

//objeto quue simula las categorias dependiendo de si permiso
const categorias =
{
    admin: [
        { name: 'users', textEsp: "Usuarios" },
        { name: 'logbooks', textEsp: "Bitagoras" },
        { name: 'usererror', textEsp: "Error de usuarios" },
        { name: 'userpermissions', textEsp: "Permisos de usuarios" },
        { name: 'backup', textEsp: "Backup" },
    ],
    cliente: [
        { name: 'pets', textEsp: "Mascotas" },
        { name: 'diary', textEsp: "Agenda" },
        { name: 'medicalshift', textEsp: "Turno médico" },
        { name: 'payments', textEsp: "Pagos" },
        { name: 'clinichistory', textEsp: "Historia clinica" },
    ],
    veterinaria: [
        { name: 'professionals', textEsp: "Profecionales" },
        { name: 'pets', textEsp: "Mascotas" },
        { name: 'collections', textEsp: "Cobros" },
        { name: 'payments', textEsp: "Pagos" },
    ],
    profecional: [
        { name: 'diaryers', textEsp: "Agenda" },
        { name: 'veterinary', textEsp: "Veterinarias" },
        { name: 'pets', textEsp: "Mascotas" },
        { name: 'paymentreports', textEsp: "Reportes de pagos" },
    ],
    invitado: [
        { name: 'bunkbeds', textEsp: "Literas" },
        { name: 'dogfood', textEsp: "Comida de perro" },
        { name: 'catfood', textEsp: "Comida de gato" },
        { name: 'conveyors', textEsp: "Trasportadoras" },
        { name: 'toys', textEsp: "Juguetes" },
        { name: 'hairsalon', textEsp: "Peluqueria" },
        { name: 'vaccines', textEsp: "Vacunas" },
    ]
}

export const Categorias = () => {
    //estado de redux donde se encuentran las variables de usuario
    const user = useSelector((state) => state.users)
    //vaariable para validar si el usuario esta logeado con auth0
    const { isAuthenticated } = useAuth0()
    
    return (
        <ul  className={style.contenedor}>
            {/* validamos si el usuario esta logeado  */}
            {isAuthenticated ?
                <>
                {/* en caso de que este validado como cliente */}
                    {user.perfil === "CLIENTE" ?
                     
                        categorias?.cliente.map((e,i) => {
                            return (
                              
                                    <BotonCategorias  key={i+e.name} name={e.name}  text={e.textEsp} />
                                
                            )
                        })
                    : <></>}
                    {/* en caso de que este validado como veterinaria */}
                    {user.perfil === "VETERINARIA" ? 
                        categorias?.veterinaria.map((e,i) => {
                           return (
                           
                                <BotonCategorias  key={i+e.name} name={e.name}  text={e.textEsp} />
                           
                        )
                        })
                   : <></>}
                   {/* en caso de que este validado como profecional */}
                    {user.perfil === "PROFESIONAL" ? 
                        categorias?.profecional.map((e,i) => {
                            return (
                                
                                    <BotonCategorias  key={i+e.name} name={e.name}  text={e.textEsp} />
                                
                            )
                        })
                    : <></>}
                    {/* en caso de que ste validado como administrador */}
                    {user.perfil === "ADMINISTRADOR" ? 
                        categorias?.admin.map((e,i) => {
                            return (
                                <BotonCategorias  key={i+e.name} name={e.name}  text={e.textEsp} />
                            )
                        })
                     : <></>}
                </>
                :
                //en caso de que no esta auntentificado con auth0 (es invitado)
                    categorias?.invitado.map((e,i) => {
                        return (
                            <BotonCategorias  key={i+e.name} name={e.name}  text={e.textEsp} />
                        )
                    })
                
            }
        </ul>
    )
}