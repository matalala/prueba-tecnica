import axios from "axios";


export function logeo(email) {
    return async function (dispatch) {
        if (email.length) {
           //consulta a la api 
           try {
            let headersList = {
                "Accept": "*/*",
                "Content-Type": "application/json" 
               }
               
               let bodyContent = JSON.stringify({
                 email
               });
               
               let reqOptions = {
                 url: "http://localhost:3001/login",
                 method: "POST",
                 headers: headersList,
                 data: bodyContent,
               }
               
               let response = await axios.request(reqOptions);
               if(!response.data.data){
                return dispatch({type:"DESLOGEO",payload:response.data.msg})
            }else{
                return dispatch({type:"LOGEO",payload:response.data.data[0]})
            }
           } catch (error) {
            console.log(error)
           }
           
            
        }
    }
}

export function registro(user) {
    return async function (dispatch) {
        if (user.tipo) {
            //consulta a la api 
            try {
                let headersList = {
                    "Accept": "*/*",
                    "Content-Type": "application/json" 
                   }
                   
                   let bodyContent = JSON.stringify({
                     ...user
                   });
                   
                   let reqOptions = {
                     url: "http://localhost:3001/registro",
                     method: "POST",
                     headers: headersList,
                     data: bodyContent,
                   }
                   
                   let response = await axios.request(reqOptions);
                   console.log(response.data);
                   if(!response.data.data){
                    //return dispatch({type:"DESLOGEO",payload:response.data.msg})
                }else{
                    return dispatch({type:"REGISTRO",payload:response.data.data[0]})
                }
               } catch (error) {
                console.log(error)
               }
        }
    }
}