import "./App.css";
import NavBar from "./components/NavBar";
// import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.css";
// import { useState } from "react";
import Routes from "./Routes/routes";
// import Card from "./components/Card/index";
// import ResultPage from "./views/ResultPage";

function App() {
  // const [isLoggedIn, setisLoggedIn] = useState(false);
  return (
    <div className="App">
      <NavBar />
      <Routes />
      {/* <ResultPage /> */}
    </div>
  );
}

export default App;
