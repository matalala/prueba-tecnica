import React from "react"
import { useAuth0 } from "@auth0/auth0-react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { BotonCategorias } from "../reutilisables/botonCategorias"
import style from './Categorias.module.css'
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
    const user = useSelector((state) => state.users)
    const { isAuthenticated } = useAuth0()
    
    return (
        <ul  className={style.contenedor}>
            {isAuthenticated ?
                <>
                    {user.perfil === "cliente" ?
                     
                        categorias?.cliente.map((e,i) => {
                            return (
                              
                                    <BotonCategorias  key={i+e.name} name={e.name}  text={e.textEsp} />
                                
                            )
                        })
                    : <></>}
                    {user.perfil === "veterinaria" ? 
                        categorias?.veterinaria.map((e,i) => {
                           return (
                           
                                <BotonCategorias  key={i+e.name} name={e.name}  text={e.textEsp} />
                           
                        )
                        })
                   : <></>}
                    {user.perfil === "profecional" ? 
                        categorias?.profecional.map((e,i) => {
                            return (
                                
                                    <BotonCategorias  key={i+e.name} name={e.name}  text={e.textEsp} />
                                
                            )
                        })
                    : <></>}
                    {user.perfil === "admin" ? 
                        categorias?.admin.map((e,i) => {
                            return (
                                <BotonCategorias  key={i+e.name} name={e.name}  text={e.textEsp} />
                            )
                        })
                     : <></>}
                </>
                :
                
                    categorias?.invitado.map((e,i) => {
                        return (
                            <BotonCategorias  key={i+e.name} name={e.name}  text={e.textEsp} />
                        )
                    })
                
            }
        </ul>
    )
}