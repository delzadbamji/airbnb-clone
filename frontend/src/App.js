import "./App.css";
import NavBar from "./components/NavBar";
import SignUp from "./views/SignUp/index";
import Register from "./views/Register/index";
// import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.css";
function App() {
  const [isLoggedIn,setisLoggedIn] = useState(false);
  return (
    <div className="App">
       <NavBar isLoggedIn={isLoggedIn} /> 
      // put the homepage here. the NavBar will toggle content based on the login status
    </div>
  );
}

export default App;
