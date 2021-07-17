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

  /**
   * Until we don't have a route to authenticate and allow a user to get validated,
   * we shall simulate the login by storing a flag in the cookie.
   */
  login = (e) => {
    // if (this.state.email !== null && this.isValidPassword()) {
    //   //axios.get if user exista (ask them to register if not exists)
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
                    onClick={(e) => this.login(e)}
                  >
                    Sign In
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

export default SignUp;
