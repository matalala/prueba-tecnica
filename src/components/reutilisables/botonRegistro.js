import React from "react";

import style from './botonRegistro.module.css'

export const BotonRegistro = ({name,tipo,fuction,img}) => {

    return (
        <button
            className={tipo===name?style.selecionado:style.boton}
            name={name}
            onClick={(e) => { fuction(e) }}>
            <img name={name} src={img} alt={name+'-img'} />
            <p name={name}>{name} </p>
        </button>
    )
}