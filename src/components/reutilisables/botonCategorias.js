import React from "react";
import style from './botonCategoria.module.css'
import { useNavigate } from "react-router-dom";
export const BotonCategorias=({name ,text})=>{
    const navigate = useNavigate()
    return(
        <li className={style.categoria} name={name} onClick={(e)=>navigate("/"+name)}>{text} </li>
    )
}