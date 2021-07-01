import {Route, BrowserRouter, Link, useLocation, Switch, useParams} from 'react-dom-router';
import Homepage from '../views/Homepage/index';
import Register from '../views/Register/index';
import SignUp from '../views/SignUp/index';
import Error404 from '../views/Error404/index';


function Routes(){

  return(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Homepage} exact/>
      <Route path="/register" component={Register}/>
      <Route path="/signin" component={SignIn}/>
      <Route path="*" component={Error404}/>
    </Switch>   
  </BrowserRouter>
  )
}

export default Routes;
