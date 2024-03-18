import { Button } from "react-bootstrap";
import Swal from "sweetalert2";
import { borrarProductoAPI, leerProductosAPI } from "../../../helpers/queries";
import { Link } from "react-router-dom";
const ItemProducto = ({producto, setProductos}) => {

  const borrarProducto = () => {
    Swal.fire({
      title: "¿Estas seguro de eliminar el producto?",
      text: "No se puede revertir este proceso",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Borrar",
      cancelButtonText: "Cancelar"
    }).then( async (result) => {
      if (result.isConfirmed) {
        const respuesta = await borrarProductoAPI(producto._id)
        if (respuesta.status === 200){
          Swal.fire({
            title: "Producto eliminado",
            text: `El producto "${producto.nombreProducto}" fue eliminado correctamente`,
            icon: "success"
          });
          // Actualizar la tabla de productos
          const listaProductos = await leerProductosAPI()
          setProductos(listaProductos)
        } else {
          Swal.fire({
            title: "Ocurrio un error",
            text: `El producto "${producto.nombreProducto}" no fue eliminado. Intente realizar esta operacion en unos minutos`,
            icon: "error"
          });
        }
        
      }
    });
  }

  return (
    <tr>
      {/* <td className="text-center">{producto._id}</td> */}
      <td>{producto.nombreProducto}</td>
      <td className="text-end">${producto.precio}</td>
      <td className="text-center td-img">
        <img
          src={producto.imagen}
          className="img-thumbnail"
          alt={producto.nombreProducto}
        ></img>
      </td>
      <td>{producto.categoria}</td>
      <td className="text-center">
        <Link className="me-md-2 mb-2 mb-md-0 btn btn-warning" to={`/administrador/editar/${producto._id}`}>
          <i className="bi bi-pencil-square" to="/editar"></i>
        </Link>
        <Button variant="danger" onClick={borrarProducto}>
          <i className="bi bi-trash"></i>
        </Button>
      </td>
    </tr>
  );
};

export default ItemProducto;
