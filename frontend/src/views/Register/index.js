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
    this.props.history.push("/");
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

  /**
   * Until we don't have a route to authenticate and allow a user to get validated,
   * we shall simulate the login by storing a flag in the cookie.
   */
  register = (e) => {
    // if (this.state.email !== null && this.isValidPassword()) {
    //   //axios.post if user doesnt exist (ask them to sign in if exist)
    // } else if (this.state.email !== null && !this.isValidPassword()) {
    //   //password errors
    // } else {
    //   //check email errors
    // }
    e.preventDefault();
    localStorage.setItem("loggedIn", "true");
    this.props.history.push("/");
    window.location.reload(); // sad, but necessary for now
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
                      onChange={(e) => this.fNameChange(e)}
                    />
                  </div>
                  <div className="input-container" style={{ marginTop: 20 }}>
                    <input
                      className="input-style"
                      placeholder="Last Name"
                      autoComplete="off"
                      type="text"
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
                      onChange={(e) => this.emailChange(e)}
                    />
                  </div>
                  <div className="input-container" style={{ marginTop: 20 }}>
                    <input
                      className="input-style"
                      placeholder="Password"
                      autoComplete="off"
                      type="password"
                      onChange={(e) => this.passwordChange(e)}
                    />
                  </div>
                  <button
                    className="btn btn-success custom-button"
                    onClick={(e) => this.register(e)}
                    disabled={this.buttonIsDisabled()}
                  >
                    Accept and Continue
                  </button>
                </form>
              </div>
            </div>
          </>
        )}
      </>
    );
  }
}

export default Register;
