import React from 'react';
import {Carousel} from 'react-bootstrap'
import "./Foro.css";
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';


const Nosotros = () => {
    return (
      <section style={{ backgroundColor: 'rgb(255, 140, 114)' }}className='containernosotros'>
      <Tab.Container  className='project' id="left-tabs-example" defaultActiveKey="first">
      <Row>
        <Col sm={3}>
          <Nav  variant="pills" className="flex-column"id="pills-tab2">
            <Nav.Item >
              <Nav.Link className='project' eventKey="first">Vision</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className='project' eventKey="second">Mision</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col sm={9}>
          <Tab.Content>
            <Tab.Pane eventKey="first">
            <div className="nav-pills mb-5 justify-content-center align-items-center">
            <h4 className='infos'>Visión
            
            <h5 className='infos2'>Nuestra visión radica en convertirnos en pioneros en la creación de un espacio que
              ayude y otorgue soluciones a la comunidad de usuarios que posean mascotas. El usuario será 
              partícipe total de las problemáticas y consultas de la comunidad y a su vez, encontrará 
              información que lo oriente respecto a donde recurrir en caso de emergencias o controles de 
              salud. Nos interesa que nuestra aplicación web se vuelva una herramienta indispensable e 
              influyente en esta comunidad de usuarios y sea reconocida por haberle facilitado la vida a
              más de alguna persona.</h5>
              </h4>
          </div>
            </Tab.Pane>
            <Tab.Pane eventKey="second">
            <div className="nav-pills mb-5 justify-content-center align-items-center">
            <h4 className='infos'>Misión 
            
            <h5 className='infos2'>Somos un grupo de personas con enfoque social y amor por los animales 
              y queremos realizar un favor comunitario donde toda persona pueda cooperar con otras con
              el fin de poder proveer ayuda, orientación o cuidados para sus mascotas. Principalmente, 
              deseamos brindar apoyo en casos de emergencias para poder resolver las inquietudes y
              problemáticas que existen en estos casos. Esto se puede lograr a través de una visualidad 
              de información de veterinarias como también una puntuación establecida por usuarios.Esto,
              sin obviar que existirá una base de datos de veterinarias por geolocalización.</h5>
            </h4>
          </div>
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
      </section>
    )
}

export default Nosotros;