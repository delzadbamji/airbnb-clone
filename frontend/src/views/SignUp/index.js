import jquery from "jquery";
import React from "react";
import "./styled.css";
import logo from "../../assets/Airbnb_Logo.svg";

class SignUp extends React.Component {
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
    window.location.href = window.location.href.replace("signin", "");
  };

  emailChange = (e) => {
    this.setState({ email: e.target.value });
  };

  passwordChange = (e) => {
    this.setState({ password: e.target.value });
  };

  login = () => {
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
            <div class="signUp-modal">
              <header>
                <img src={logo} alt="header" style={{ width: "10vw" }}></img>
              </header>
              <div class="form-container">
                <form>
                  <div class="input-email-container">
                    <input
                      className="input-style"
                      placeholder="Email"
                      autoComplete="off"
                      type="email"
                      // value=""
                      onChange={(e) => this.emailChange(e)}
                    />
                  </div>
                  <div class="input-container" style={{ marginTop: 20 }}>
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
                    class="btn btn-success custom-button"
                    onClick={this.login}
                  >
                    Sign In
                  </button>
                </form>
              </div>
            </div>
          </>
        )}
        {/* {
          <button class="btn btn-primary" onClick={this.toggleModal}>
            Login
          </button>
        } */}
      </>
    );
  }
}

export default SignUp;
