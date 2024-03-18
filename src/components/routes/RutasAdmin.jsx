import { Routes, Route } from "react-router-dom"
import Administrador from "../pages/Administrador"
import FormularioProducto from "../pages/producto/FormularioProducto"

const RutasAdmin = () => {
  return (
    <Routes>
        <Route
          exact
          path="/"
          element={<Administrador></Administrador>}
        ></Route>
        <Route
          exact
          path="/crear"
          element={<FormularioProducto editar={false}></FormularioProducto>}
        ></Route>
        <Route
          exact
          path="/editar/:id"
          element={<FormularioProducto editar={true}></FormularioProducto>}
        ></Route>
    </Routes>
  )
}

export default RutasAdmin