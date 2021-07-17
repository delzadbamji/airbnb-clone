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

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: localStorage.getItem("loggedIn") ? true : false,
      location: null
    };
  }
  /**
   * Until we don't have a route to authenticate and allow a user to get validated,
   * we shall simulate the login by storing a flag in the storage.
   */

  logout = () => {
    localStorage.removeItem("loggedIn");
    this.setState({ isLoggedIn: false });
  };

  updateLocation = (e) => {
    this.setState({ location: e.target.value });
  };

  getResults = (e) => {
    e.stopPropagation();
    e.preventDefault();
    console.log("here");
    if (this.state.location !== null) {
      this.props.history.push({
        pathname: `/results/${this.state.location}`,
        state: { loc: this.state.location }
      });
    } else {
      console.log("some details are incomplete");
    }
  };

  render() {
    // return this.props.isLoggedIn ? (
    return this.state.isLoggedIn ? (
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
              style={{
                transform: "translate(10px, 5px)",
                marginLeft: 20,
                height: 40,
                width: 500
              }}
              onChange={(e) => this.updateLocation(e)}
            />
            <Button
              variant="outline-primary"
              style={{ transform: "translate(304px, -35px)", marginLeft: 85 }}
              type="submit"
              onClick={(e) => this.getResults(e)}
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
            <Nav.Link
              href="/"
              className="Col"
              style={{ color: "#ff5a5f" }}
              onClick={() => this.logout()}
            >
              <h4>Sign Out </h4>
            </Nav.Link>
          </Nav>
        </Col>
      </Row>
    ) : (
      <>
        <Row id="row">
          <Col
            style={{ height: 50, cursor: "pointer" }}
            lg={3}
            xl={3}
            md={3}
            xs={12}
            sm={12}
            as={"img"}
            onClick={() => (window.location.href = "/")}
            src={logo}
          ></Col>
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
