const initialState = { //estados iniciales
  users:{},
  error:""
}

function rootReducer(state = initialState, action)
{
  switch (action.type)
  {
    case "DESLOGEO":
      return{
          ...state,
          error:action.payload
      }
    case "LOGEO":
        return{
            ...state,
            users: {
                id:action.payload._ID,
                email:action.payload.email,
                perfil:action.payload.perfil,
                foto:action.payload.foto,
                familias:action.payload.familia,
                patentes:action.payload.patente
            }
        }
        case "REGISTRO":
        return{
            ...state,
             users: {
              id:action.payload._ID,
              email:action.payload.email,
              perfil:action.payload.perfil,
              foto:action.payload.foto,
              familias:action.payload.familia,
              patentes:action.payload.patente
            }
        }

        default: return state
  }
}
export default rootReducer;