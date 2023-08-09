import React from "react";
import style from './Contacto.module.css'
export const Contacto=()=>{
    return(
        <div className={style.contenedor}>
          <div className={style.contenContacto}>
          <a className={style.link} href="tel:+549-1165269434">+5491165269434</a>  
          <a className={style.link} href="mailto:info@vetly.com.ar">info@vetly.com.ar</a>  
          </div>
          <div className={style.contenAuda}>
          <a className={style.link} href="#">ThemeFAQ's </a>  
          <a className={style.link} href="#">NeedHelps</a>  
          </div>
        </div>
    )
}