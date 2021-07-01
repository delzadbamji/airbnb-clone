import "./styled.css";
import React from "react";
import logo from "../../assets/Airbnb_Logo.svg";
import {
  Container,
  Row,
  Col,
  Navbar,
  Nav,
  Form,
  FormControl,
  Button
} from "react-bootstrap";
// import { Container, Row, Col } from "reactstrap";

class NavBar extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return this.props.isLoggedIn ? (
      // <Navbar bg="light" variant="light">
      <Row id="row">
        <Col
          lg={3}
          xl={3}
          md={3}
          xs={12}
          sm={12}
          style={{ height: 50, textShadow: " 0 0 black" }}
        >
          <Navbar.Brand href="/">
            <img src={logo} alt="logo"></img>
          </Navbar.Brand>
        </Col>
        <Col
          style={{ height: 50, textShadow: " 0 0 black" }}
          xs={12}
          sm={12}
          md={{ span: 3, offset: 1 }}
          lg={{ span: 3, offset: 1 }}
          xl={{ span: 3, offset: 1 }}
        >
          <Form>
            <FormControl
              type="text"
              placeholder="Search"
              className="mr-sm-2"
              style={{ transform: "translate(10px, 5px)", height: 40 }}
            />
            <Button
              variant="outline-primary"
              style={{ transform: "translate(304px, -35px)" }}
              type="submit"
            >
              Search
            </Button>
          </Form>
        </Col>
        <Col
          style={{ height: 50, textShadow: " 0 0 black" }}
          xs={12}
          sm={12}
          md={{ span: 1, offset: 3 }}
          lg={{ span: 1, offset: 3 }}
          xl={{ span: 1, offset: 3 }}
          className="Col"
        >
          <Nav className="mr-auto Col" style={{ width: 128 }}>
            {/* <Nav.Link href="#home">Home</Nav.Link> */}
            {/* <Nav.Link href="#features">Features</Nav.Link> */}
            <Nav.Link href="/" className="Col" style={{ color: "#ff5a5f" }}>
              <h4>Sign Out </h4>
            </Nav.Link>
          </Nav>
        </Col>
      </Row>
    ) : (
      // {/* </Navbar> */}
      // <>
      //  <Row>
      //   <Col lg={4} xl={4} md={4}>
      //     <a href="/" className="nav-buttons">
      //       <img src={logo} className="logo" alt="logo" />
      //     </a>
      //   </Col>
      //   <Col lg={1} xl={1} md={1}>
      //     <a className="nav-buttons" href="/">
      //       <h4>Sign Out</h4>
      //     </a>
      //   </Col>
      // </Row>
      // </>
      <>
        <Row id="row">
          <Col
            style={{ height: 50 }}
            lg={3}
            xl={3}
            md={3}
            xs={12}
            sm={12}
            as={"img"}
            // href={"/"}
            src={logo}
          >
            {/* <img src={logo} alt="logo"></img> */}
          </Col>
          <Col
            style={{ height: 50, textShadow: " 0 0 black" }}
            xs={12}
            sm={12}
            md={{ span: 1, offset: 7 }}
            lg={{ span: 1, offset: 7 }}
            xl={{ span: 1, offset: 7 }}
            as={"a"}
            href={"/signin"}
            className="Col-signIn Col"
          >
            <h4>Sign in </h4>
          </Col>
          <Col
            style={{ height: 50, textShadow: " 0 0 black" }}
            xs={12}
            sm={12}
            md={{ span: 1 }}
            lg={{ span: 1 }}
            xl={{ span: 1 }}
            as={"a"}
            href={"/register"}
            className="Col-register Col"
          >
            <h4>Register</h4>
          </Col>
        </Row>
      </>
    );
  }
}

export default NavBar;
