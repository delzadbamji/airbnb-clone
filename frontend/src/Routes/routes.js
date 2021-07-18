import { Route, BrowserRouter, Switch } from "react-router-dom";
import HomePage from "../views/HomePage/index";
import Register from "../views/Register/index";
import SignUp from "../views/SignUp/index";
import DetailsPage from "../views/DetailsPage/index";
import Error404 from "../views/Error404/index";
import ResultPage from "../views/ResultPage/index";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/register" component={Register} />
        <Route path="/signin" component={SignUp} />
        <Route path="/details" component={DetailsPage}/>
        <Route path="/results/:homes" component={ResultPage} />
        <Route path="*" component={Error404} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
