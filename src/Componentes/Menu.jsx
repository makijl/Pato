import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import '../css/Menu.css';
import Image from 'react-bootstrap/Image';
import mer from '../img/DDN.png';
import Ticks from '../img/TICS.png';
import agri from '../img/AGRO.png';

function ColorSchemesExample() {
  return (
    <>  
      <Navbar bg="" data-bs-theme="">
        <Container>
          <Navbar.Brand href="#home"> </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/contacto">Contacto</Nav.Link>
            <Nav.Link as={Link} to="/convocatoria">Convocatoria</Nav.Link>
            <Nav.Link as={Link} to="/control-escolar">Control Escolar</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      
      <br />
      <Container>
        <Row>
          <Col id='col-1' className='Columnas'><h1>Agricultura</h1>Carrera profesional diseñada para desarrollar procesos de producción agrícola, que garanticen una rentabilidad con el fin de contribuir al desarrollo de la región. Además de estructurar e implementar sistemas de agricultura protegida mediante el control y automatización de los procesos, que garantizan la productividad y la sustentabilidad de los recursos agrícolas....<Image src={agri}></Image></Col>
          <Col id='col-2' className='Columnas'><h1>Mercadotecnia</h1>Se forman profesionales que se dedican a administrar estrategias, técnicas y herramientas adecuadas para contribuir al desarrollo de la organización. Administrar el proceso de compras y control de suministros a través de las políticas y procedimientos de la organización y técnicas de control de inventarios y almacenamiento para asegurar su disponibilidad....<Image src={mer}></Image></Col>
          <Col id='col-3' className='Columnas'><h1>Tics</h1>Se prepara al estudiante para implementar aplicaciones de software mediante técnicas de programación. Además realizar soporte técnico a equipos de cómputo sistemas operativos y redes locales. Crear aplicaciones multimedia mediante herramientas informáticas para desarrollar y gestionar sitios de comercio electrónico a través de aplicaciones web....<Image src={Ticks}></Image></Col>       
        </Row>
      </Container>
    </>
  );
}

export default ColorSchemesExample;