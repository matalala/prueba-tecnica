import axios from "axios";


export function logeo(email) {
    return async function (dispatch) {
        if (email.length) {
           //consulta a la api 
           try {
            //creando header de la consulta
            let headersList = {
                "Accept": "*/*",
                "Content-Type": "application/json" 
               }
               //objeto que pasapos a la consulta
               let bodyContent = JSON.stringify({
                 email
               });
               //opciones de la consulta
               let reqOptions = {
                 url: "https://localhost:7113/api/Usuario/LoginPerfilByEmail",
                 method: "POST",
                 headers: headersList,
                 data: bodyContent,
               }
               //consulta a la api 
               let response = await axios.request(reqOptions);
               //validacion de la consulta
               console.log(response)
           
             return dispatch({type:"LOGEO",payload:response.data[0]})
          
           } catch (error) {
            console.log(error)
            return dispatch({type:"DESLOGEO",payload:"error"})
           }
           
            
        }
    }
}

export function registro(user) {
    return async function (dispatch) {
        if (user.email) {
            //consulta a la api 
            try {
                let headersList = {
                    "Accept": "*/*",
                    "Content-Type": "application/json" 
                   }
                   
                   let bodyContent = JSON.stringify({
                     email:user.email,
                     id_tipo_Usuario:user.tipo
                   });
                   
                   let reqOptions = {
                     url: "https://localhost:7113/api/Usuario/RegistrarUsuario",
                     method: "POST",
                     headers: headersList,
                     data: bodyContent,
                   }
                   
                   let response = await axios.request(reqOptions);
                   console.log(response)
                    return dispatch({type:"REGISTRO",payload:response.data})
               } catch (error) {
                console.log(error)
                return dispatch({type:"DESLOGEO",payload:"error"})
               }
        }
    }
}