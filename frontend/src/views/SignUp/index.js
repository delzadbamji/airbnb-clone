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
    this.props.history.push("/");
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
            <div className="overlay" onClick={this.toggleModal}></div>
            <div className="signUp-modal">
              <header>
                <img src={logo} alt="header" style={{ width: "10vw" }}></img>
              </header>
              <div className="form-container">
                <form>
                  <div className="input-email-container">
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
