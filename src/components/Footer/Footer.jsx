import { Col, Navbar, Row } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
const Footer = function () {
  return (
    <>
      <Navbar
        expand="lg"
        className="justify-content-center"
        fixed="bottom"
        variant="dark"
        bg="dark"
      >
        <Nav defaultActiveKey="#owner">
          <Row expand="lg">
            <Col md="auto">
              <Nav.Item>
                <Nav.Link href="#owner">Muhammad Fajri Assidiq</Nav.Link>
              </Nav.Item>
            </Col>
            <Col>
              <Nav.Item>
                <Nav.Link href="">Eduwork</Nav.Link>
              </Nav.Item>
            </Col>
          </Row>
        </Nav>
      </Navbar>
    </>
  );
};

export default Footer;
