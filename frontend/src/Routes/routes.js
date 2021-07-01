import {Route, BrowserRouter, Link, useLocation, Switch, useParams} from 'react-dom-router';
import Homepage from '../views/Homepage/';

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

export default Routes
