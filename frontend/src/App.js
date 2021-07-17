import "./App.css";
import NavBar from "./components/NavBar";

import "bootstrap/dist/css/bootstrap.css";
// import { useState } from "react";
import Routes from "./Routes/routes";

function App() {
  // const [isLoggedIn, setisLoggedIn] = useState(false);
  return (
    <div className="App">
      <NavBar />
      <Routes />
    </div>
  );
}

export default App;
