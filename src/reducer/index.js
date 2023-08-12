
//estado inicial de redux
const initialState = { 
  users:{},
  error:""
}
//funcion que actualiza el estado dependiendo de la accion que allamos echo
function rootReducer(state = initialState, action)
{
  //cree un swith para determinar el caso de cada uno
  switch (action.type)
  {
    //en caso que el logeo sea erroneo modificamos el estaddo error con el msj de la api
    case "DESLOGEO":
      return{
          ...state,
          error:action.payload
      }
      //en caso de que el logeo sea correcto modificamos el users con los datos del usuario
    case "LOGEO":
        return{
            ...state,
            users: {
                id:action.payload.id,
                email:action.payload.email,
                perfil:action.payload.tipo_Usuario,
                foto:action.payload.foto,
                familias:action.payload.patentesIndividuales_Asignadas,
                patentes:action.payload.patentesPorFamilia_Asignadas  
            }
        }
         //en caso de que el registro sea correcto modificamos el users con los datos del usuario
        case "REGISTRO":
        return{
            ...state,
             users: {
              msg:action.payload
            }
        }

        default: return state
  }
}
export default rootReducer;