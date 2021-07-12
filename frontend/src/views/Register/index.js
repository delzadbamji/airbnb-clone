import jquery from "jquery";
import React from "react";
import "./styled.css";
import logo from "../../assets/Airbnb_Logo.svg";

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalView: true,
      fname: null,
      lname: null,
      email: null,
      password: null
    };
  }
  toggleModal = () => {
    this.setState((prev) => ({ modalView: !prev.modalView }));
    window.location.href = window.location.href.replace("register", "");
  };

  emailChange = (e) => {
    this.setState({ email: e.target.value });
  };

  passwordChange = (e) => {
    this.setState({ password: e.target.value });
  };

  fNameChange = (e) => {
    this.setState({ fname: e.target.value });
  };
  lNameChange = (e) => {
    this.setState({ lname: e.target.value });
  };
  buttonIsDisabled = () => {
    return this.state.fname &&
      this.state.lname &&
      this.state.email &&
      this.state.password
      ? false
      : true;
  };

  register = () => {
    if (this.state.email !== null && this.state.password !== null) {
      //axios.get and validate user exists
    } else if (this.state.email !== null) {
      //password errors
    } else {
      //email errors
    }
  };

  render() {
    return (
      <>
        {this.state.modalView && (
          <>
            <div className="overlay" onClick={this.toggleModal}></div>
            <div className="register-modal">
              <header>
                <img src={logo} alt="header" style={{ width: "10vw" }}></img>
              </header>
              <div className="form-container">
                <form style={{ marginTop: 45 }}>
                  <div className="input-email-container">
                    <input
                      className="input-style"
                      placeholder="First Name"
                      autoComplete="off"
                      type="text"
                      // value=""
                      onChange={(e) => this.fNameChange(e)}
                    />
                  </div>
                  <div className="input-container" style={{ marginTop: 20 }}>
                    <input
                      className="input-style"
                      placeholder="Last Name"
                      autoComplete="off"
                      type="text"
                      // value=""
                      onChange={(e) => this.lNameChange(e)}
                    />
                  </div>
                  <div
                    className="input-email-container"
                    style={{ marginTop: 20 }}
                  >
                    <input
                      className="input-style"
                      placeholder="Email"
                      autoComplete="off"
                      type="email"
                      // value=""
                      onChange={(e) => this.emailChange(e)}
                    />
                  </div>
                  <div className="input-container" style={{ marginTop: 20 }}>
                    <input
                      className="input-style"
                      placeholder="Password"
                      autoComplete="off"
                      type="password"
                      // value=""
                      onChange={(e) => this.passwordChange(e)}
                    />
                  </div>
                  <button
                    className="btn btn-success custom-button"
                    onClick={this.register}
                    disabled={this.buttonIsDisabled()}
                  >
                    Accept and Continue
                  </button>
                </form>
              </div>
            </div>
          </>
        )}
        {/* {
          <button class="btn btn-primary" onClick={this.toggleModal}>
            Register
          </button>
        } */}
      </>
    );
  }
}

export default Register;
