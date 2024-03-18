import { Container, Card, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { obtenerProductoAPI } from "../../helpers/queries";
import { useEffect, useState } from "react";

const DetalleProducto = () => {
  const [producto, setProducto] = useState({})

  const {id} = useParams()
  
  const traerProducto = async (id) => {
    try {
      const respuesta = await obtenerProductoAPI(id) 
      if (respuesta.status === 200){
        const listarProducto = await respuesta.json()
        setProducto(listarProducto)
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    traerProducto(id)
  }, [])

  return (
    <Container className="my-3 mainSection">
      <Card>
        <Row>
          <Col md={6}>
            <Card.Img
              variant="top"
              src={producto?.imagen}
            />
          </Col>
          <Col md={6}>
            <Card.Body>
              <Card.Title className="primary-font">{producto?.nombreProducto}</Card.Title>
              <hr />
              <Card.Text>
              {producto?.descripcion_amplia}
              <br/>
              <br/>
              <span className="primary-font fw-semibold ">Categoria:</span> {producto?.categoria}
              <br className='mb-3'/>
              <span className="primary-font fw-semibold ">Precio: ${producto?.precio}</span></Card.Text>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </Container>
  );
};

export default DetalleProducto;
