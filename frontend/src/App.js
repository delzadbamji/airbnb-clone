import "./App.css";
import NavBar from "./components/NavBar";
import SignUp from "./views/SignUp/index";
import Register from "./views/Register/index";
// import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.css";
function App() {
  return (
    <div className="App">
      {/* <NavBar isLoggedIn={true} />  */}
      <Register />
    </div>
  );
}

export default App;
