import { Navigate } from "react-router-dom"

const RutasProtegidas = ({children}) => {
  const administrador = JSON.parse(sessionStorage.getItem('usuarioRollingCoffee')) || null
  if(!administrador){
    return <Navigate to='/login'/>
  } else {
    return children
  }
}

export default RutasProtegidas