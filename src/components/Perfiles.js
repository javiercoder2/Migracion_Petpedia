
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./PerfilesCard";
import projImg1 from "../img/riki.jpeg";
import projImg2 from "../img/francisca.jpeg";
import projImg3 from "../img/Javier.jpeg";
import projImg4 from "../img/fred.jpeg";
import projImg5 from "../img/tamara.jpeg";

import colorSharp2 from "../img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const PerfilesNosotros = () => {

  const projects = [
    {
      title: "Ricardo Carrizo",
      description: "Scrum Master",
      imgUrl: projImg1,
    },
    {
      title: "Francisca Madariaga",
      description: "Leader Project",
      imgUrl: projImg2,
    },
    {
      title: "Javier Sepulveda",
      description: "Developer",
      imgUrl: projImg3,
    },
    {
      title: "Frederick Cid",
      description: "Developer",
      imgUrl: projImg4,
    },
    {
      title: "Tamara Verdugo",
      description: "Developer",
      imgUrl: projImg5,
    },

  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Equipo PetPedia</h2>
                <p>Nos enfocamos en crear un ambiente cooperativo y enfocado al bienesar de tu mascota</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Integrantes</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Historia</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <p>Pedpedia es entero de pulento oe tii</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
export default PerfilesNosotros;