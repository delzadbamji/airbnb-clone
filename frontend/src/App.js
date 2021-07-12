import "./App.css";
import NavBar from "./components/NavBar";
import SignUp from "./views/SignUp/index";
import Register from "./views/Register/index";
// import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.css";
import { useState } from "react";
import HomePage from "./views/HomePage";
import Routes from "./Routes/routes";
function App() {
  const [isLoggedIn, setisLoggedIn] = useState(false);
  return (
    <div className="App">
      <NavBar isLoggedIn={isLoggedIn} />
      {/* <HomePage /> */}
      <Routes />
    </div>
  );
}

export default App;
