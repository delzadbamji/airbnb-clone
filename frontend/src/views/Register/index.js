import jquery from "jquery";
import React from "react";
import "./styled.css";
import logo from "../../assets/Airbnb_Logo.svg";

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalView: true,
      email: null,
      password: null
    };
  }
  toggleModal = () => {
    this.setState((prev) => ({ modalView: !prev.modalView }));
  };

  emailChange = (e) => {
    this.setState({ email: e.target.value });
  };

  passwordChange = (e) => {
    this.setState({ password: e.target.value });
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
            <div class="overlay" onClick={this.toggleModal}></div>
            <div class="register-modal">
              <header>
                <img src={logo} alt="header" style={{ width: "10vw" }}></img>
              </header>
              <div class="form-container">
                <form style={{ marginTop: 45 }}>
                  <div class="input-email-container">
                    <input
                      class="input-style"
                      placeholder="First Name"
                      autocomplete="off"
                      type="text"
                      // value=""
                      onChange={(e) => this.emailChange(e)}
                    />
                  </div>
                  <div class="input-container" style={{ marginTop: 20 }}>
                    <input
                      class="input-style"
                      placeholder="Last Name"
                      autocomplete="off"
                      type="text"
                      // value=""
                      onChange={(e) => this.passwordChange(e)}
                    />
                  </div>
                  <div class="input-email-container" style={{ marginTop: 20 }}>
                    <input
                      class="input-style"
                      placeholder="Email"
                      autocomplete="off"
                      type="email"
                      // value=""
                      onChange={(e) => this.emailChange(e)}
                    />
                  </div>
                  <div class="input-container" style={{ marginTop: 20 }}>
                    <input
                      class="input-style"
                      placeholder="Password"
                      autocomplete="off"
                      type="password"
                      // value=""
                      onChange={(e) => this.passwordChange(e)}
                    />
                  </div>
                  <button
                    class="btn btn-success custom-button"
                    onClick={this.register}
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
